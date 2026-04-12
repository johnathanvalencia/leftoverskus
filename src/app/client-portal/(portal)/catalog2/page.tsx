"use client";

import { useState, useMemo, useRef, useEffect, type ReactNode } from "react";
import {
  Building2,
  Plus,
  Check,
  X,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────

interface Variant { id: string; name: string }
interface Product { id: string; name: string; variants: Variant[] }
interface Brand { id: string; name: string; products: Product[] }
interface FlatRow { brandId: string; brandName: string; productId: string; productName: string; variantId: string; variantName: string }

type ModalType = "brand" | "product" | "variant" | null;

// ─── Mock data ───────────────────────────────────────────

const initialBrands: Brand[] = [
  {
    id: "b1", name: "Acme Beauty",
    products: [
      { id: "p1", name: "Radiance Serum", variants: [{ id: "v1", name: "30ml Original" }, { id: "v2", name: "50ml Deluxe" }, { id: "v3", name: "15ml Travel" }] },
      { id: "p2", name: "Glow Moisturizer", variants: [{ id: "v4", name: "Day Cream SPF30" }, { id: "v5", name: "Night Cream" }] },
      { id: "p3", name: "Lip Color Kit", variants: [{ id: "v6", name: "Berry Collection" }, { id: "v7", name: "Nude Collection" }, { id: "v8", name: "Bold Collection" }] },
    ],
  },
  {
    id: "b2", name: "Acme Wellness",
    products: [
      { id: "p4", name: "Vitality Supplement", variants: [{ id: "v9", name: "60 Capsules" }, { id: "v10", name: "120 Capsules" }] },
      { id: "p5", name: "Calm Tea Blend", variants: [{ id: "v11", name: "20 Sachets" }, { id: "v12", name: "40 Sachets" }] },
    ],
  },
  {
    id: "b3", name: "FreshHome",
    products: [
      { id: "p6", name: "Linen Spray", variants: [{ id: "v13", name: "Lavender 250ml" }, { id: "v14", name: "Eucalyptus 250ml" }] },
    ],
  },
];

// ─── Modal shell ─────────────────────────────────────────

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          <button onClick={onClose} className="text-muted-foreground transition-colors hover:text-foreground">
            <X className="size-4" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

// ─── Rename inline input ─────────────────────────────────

function RenameInput({ initial, onConfirm, onCancel }: { initial: string; onConfirm: (v: string) => void; onCancel: () => void }) {
  const [value, setValue] = useState(initial);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { ref.current?.focus(); ref.current?.select(); }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && value.trim()) onConfirm(value.trim());
    else if (e.key === "Escape") onCancel();
  }

  return (
    <div className="flex items-center gap-1.5">
      <input
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-7 flex-1 rounded-md border border-ring bg-transparent px-2 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-ring/50"
      />
      <Button variant="ghost" size="icon-xs" className="text-emerald-500 hover:text-emerald-600" onClick={() => value.trim() && onConfirm(value.trim())} disabled={!value.trim()}>
        <Check className="size-3.5" />
      </Button>
      <Button variant="ghost" size="icon-xs" className="text-muted-foreground" onClick={onCancel}>
        <X className="size-3.5" />
      </Button>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────

export default function Catalog2Page() {
  const [brands, setBrands] = useState<Brand[]>(initialBrands);
  const [renamingId, setRenamingId] = useState<string | null>(null);

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalName, setModalName] = useState("");
  const [modalBrandId, setModalBrandId] = useState("");
  const [modalProductId, setModalProductId] = useState("");

  function openModal(type: ModalType) {
    setModalName("");
    setModalBrandId("");
    setModalProductId("");
    setActiveModal(type);
  }

  function closeModal() {
    setActiveModal(null);
  }

  // ─── Flatten for table ──────────────────────────────────

  const rows = useMemo(() => {
    const flat: FlatRow[] = [];
    for (const brand of brands) {
      if (brand.products.length === 0) {
        flat.push({ brandId: brand.id, brandName: brand.name, productId: "", productName: "", variantId: "", variantName: "" });
        continue;
      }
      for (const product of brand.products) {
        if (product.variants.length === 0) {
          flat.push({ brandId: brand.id, brandName: brand.name, productId: product.id, productName: product.name, variantId: "", variantName: "" });
        } else {
          for (const variant of product.variants) {
            flat.push({ brandId: brand.id, brandName: brand.name, productId: product.id, productName: product.name, variantId: variant.id, variantName: variant.name });
          }
        }
      }
    }
    return flat;
  }, [brands]);

  // ─── CRUD ───────────────────────────────────────────────

  function submitBrand() {
    if (!modalName.trim()) return;
    setBrands((prev) => [...prev, { id: `b-${Date.now()}`, name: modalName.trim(), products: [] }]);
    closeModal();
  }

  function submitProduct() {
    if (!modalName.trim() || !modalBrandId) return;
    setBrands((prev) => prev.map((b) => b.id === modalBrandId ? { ...b, products: [...b.products, { id: `p-${Date.now()}`, name: modalName.trim(), variants: [] }] } : b));
    closeModal();
  }

  function submitVariant() {
    if (!modalName.trim() || !modalProductId) return;
    setBrands((prev) => prev.map((b) => ({ ...b, products: b.products.map((p) => p.id === modalProductId ? { ...p, variants: [...p.variants, { id: `v-${Date.now()}`, name: modalName.trim() }] } : p) })));
    closeModal();
  }

  function renameBrand(id: string, name: string) { setBrands((prev) => prev.map((b) => b.id === id ? { ...b, name } : b)); setRenamingId(null); }
  function renameProduct(id: string, name: string) { setBrands((prev) => prev.map((b) => ({ ...b, products: b.products.map((p) => p.id === id ? { ...p, name } : p) }))); setRenamingId(null); }
  function renameVariant(id: string, name: string) { setBrands((prev) => prev.map((b) => ({ ...b, products: b.products.map((p) => ({ ...p, variants: p.variants.map((v) => v.id === id ? { ...v, name } : v) })) }))); setRenamingId(null); }

  function deleteBrand(id: string) { setBrands((prev) => prev.filter((b) => b.id !== id)); }
  function deleteProduct(id: string) { setBrands((prev) => prev.map((b) => ({ ...b, products: b.products.filter((p) => p.id !== id) }))); }
  function deleteVariant(id: string) { setBrands((prev) => prev.map((b) => ({ ...b, products: b.products.map((p) => ({ ...p, variants: p.variants.filter((v) => v.id !== id) })) }))); }

  const productsForVariantModal = useMemo(() => {
    if (!modalBrandId) return brands.flatMap((b) => b.products.map((p) => ({ ...p, brandName: b.name })));
    const brand = brands.find((b) => b.id === modalBrandId);
    return brand ? brand.products.map((p) => ({ ...p, brandName: brand.name })) : [];
  }, [brands, modalBrandId]);

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Product Catalog</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage brands, products, and variants.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-purple hover:bg-purple-dark text-white" onClick={() => openModal("brand")}>
            <Plus className="mr-1.5 size-3.5" />
            Brand
          </Button>
          <Button size="sm" className="bg-purple hover:bg-purple-dark text-white" onClick={() => openModal("product")} disabled={brands.length === 0}>
            <Plus className="mr-1.5 size-3.5" />
            Product
          </Button>
          <Button size="sm" className="bg-purple hover:bg-purple-dark text-white" onClick={() => openModal("variant")} disabled={brands.flatMap((b) => b.products).length === 0}>
            <Plus className="mr-1.5 size-3.5" />
            Variant
          </Button>
        </div>
      </div>

      {/* Table */}
      {rows.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
            <Building2 className="size-6 text-muted-foreground" />
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">No brands yet</p>
          <p className="mt-1 text-xs text-muted-foreground">Add your first brand to get started.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Brand</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Variant</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => {
                const prevRow = i > 0 ? rows[i - 1] : null;
                const showBrandDivider = prevRow && prevRow.brandId !== row.brandId;
                const isFirstOfBrand = !prevRow || prevRow.brandId !== row.brandId;
                const isFirstOfProduct = !prevRow || prevRow.productId !== row.productId;

                return (
                  <TableRow key={`${row.brandId}-${row.productId}-${row.variantId || "empty"}-${i}`} className={cn("group/row", showBrandDivider && "border-t-2 border-border")}>
                    <TableCell className="align-top">
                      {renamingId === row.brandId && isFirstOfBrand ? (
                        <RenameInput initial={row.brandName} onConfirm={(n) => renameBrand(row.brandId, n)} onCancel={() => setRenamingId(null)} />
                      ) : (
                        <div className="flex items-center gap-2">
                          <Building2 className="size-3.5 text-primary/60 shrink-0" />
                          <span className="font-semibold text-foreground">{row.brandName}</span>
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="align-top">
                      {row.productId ? (
                        renamingId === row.productId && isFirstOfProduct ? (
                          <RenameInput initial={row.productName} onConfirm={(n) => renameProduct(row.productId, n)} onCancel={() => setRenamingId(null)} />
                        ) : (
                          <span className="text-foreground">{row.productName}</span>
                        )
                      ) : null}
                    </TableCell>

                    <TableCell>
                      {row.variantId ? (
                        renamingId === row.variantId ? (
                          <RenameInput initial={row.variantName} onConfirm={(n) => renameVariant(row.variantId, n)} onCancel={() => setRenamingId(null)} />
                        ) : (
                          <span className="text-muted-foreground">{row.variantName}</span>
                        )
                      ) : null}
                    </TableCell>

                    <TableCell className="align-top">
                      {renamingId !== row.brandId && renamingId !== row.productId && renamingId !== row.variantId && (
                        <RowActions
                          row={row}
                          isFirstOfBrand={isFirstOfBrand}
                          isFirstOfProduct={isFirstOfProduct}
                          onRenameBrand={() => setRenamingId(row.brandId)}
                          onRenameProduct={() => setRenamingId(row.productId)}
                          onRenameVariant={() => setRenamingId(row.variantId)}
                          onDeleteBrand={() => deleteBrand(row.brandId)}
                          onDeleteProduct={() => deleteProduct(row.productId)}
                          onDeleteVariant={() => deleteVariant(row.variantId)}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}

      {/* ── Add Brand Modal ─────────────────────────────── */}
      <Modal open={activeModal === "brand"} onClose={closeModal} title="Add Brand">
        <form onSubmit={(e) => { e.preventDefault(); submitBrand(); }} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="brand-name">Brand name</Label>
            <Input id="brand-name" value={modalName} onChange={(e) => setModalName(e.target.value)} placeholder="e.g. Acme Beauty" autoFocus />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" size="sm" onClick={closeModal}>Cancel</Button>
            <Button type="submit" size="sm" className="bg-purple hover:bg-purple-dark text-white" disabled={!modalName.trim()}>Add Brand</Button>
          </div>
        </form>
      </Modal>

      {/* ── Add Product Modal ───────────────────────────── */}
      <Modal open={activeModal === "product"} onClose={closeModal} title="Add Product">
        <form onSubmit={(e) => { e.preventDefault(); submitProduct(); }} className="space-y-4">
          <div className="space-y-2">
            <Label>Brand</Label>
            <Select value={modalBrandId} onValueChange={(v) => setModalBrandId(v ?? "")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((b) => (
                  <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="product-name">Product name</Label>
            <Input id="product-name" value={modalName} onChange={(e) => setModalName(e.target.value)} placeholder="e.g. Radiance Serum" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" size="sm" onClick={closeModal}>Cancel</Button>
            <Button type="submit" size="sm" className="bg-purple hover:bg-purple-dark text-white" disabled={!modalName.trim() || !modalBrandId}>Add Product</Button>
          </div>
        </form>
      </Modal>

      {/* ── Add Variant Modal ───────────────────────────── */}
      <Modal open={activeModal === "variant"} onClose={closeModal} title="Add Variant">
        <form onSubmit={(e) => { e.preventDefault(); submitVariant(); }} className="space-y-4">
          <div className="space-y-2">
            <Label>Brand</Label>
            <Select value={modalBrandId} onValueChange={(v) => { setModalBrandId(v ?? ""); setModalProductId(""); }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.filter((b) => b.products.length > 0).map((b) => (
                  <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Product</Label>
            <Select value={modalProductId} onValueChange={(v) => setModalProductId(v ?? "")} disabled={!modalBrandId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={modalBrandId ? "Select a product" : "Select a brand first"} />
              </SelectTrigger>
              <SelectContent>
                {productsForVariantModal.map((p) => (
                  <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="variant-name">Variant name</Label>
            <Input id="variant-name" value={modalName} onChange={(e) => setModalName(e.target.value)} placeholder="e.g. 30ml Original" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" size="sm" onClick={closeModal}>Cancel</Button>
            <Button type="submit" size="sm" className="bg-purple hover:bg-purple-dark text-white" disabled={!modalName.trim() || !modalProductId}>Add Variant</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

// ─── Row actions dropdown ────────────────────────────────

function RowActions({
  row, isFirstOfBrand, isFirstOfProduct,
  onRenameBrand, onRenameProduct, onRenameVariant,
  onDeleteBrand, onDeleteProduct, onDeleteVariant,
}: {
  row: FlatRow; isFirstOfBrand: boolean; isFirstOfProduct: boolean;
  onRenameBrand: () => void; onRenameProduct: () => void; onRenameVariant: () => void;
  onDeleteBrand: () => void; onDeleteProduct: () => void; onDeleteVariant: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon-xs" className="text-muted-foreground opacity-0 transition-opacity group-hover/row:opacity-100" />}
      >
        <MoreHorizontal className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isFirstOfBrand && (
          <>
            <DropdownMenuItem onClick={onRenameBrand}>
              <Pencil className="mr-2 size-3.5" /> Rename Brand
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive" onClick={onDeleteBrand}>
              <Trash2 className="mr-2 size-3.5" /> Delete Brand
            </DropdownMenuItem>
            {(row.productId || row.variantId) && <DropdownMenuSeparator />}
          </>
        )}
        {isFirstOfProduct && row.productId && (
          <>
            <DropdownMenuItem onClick={onRenameProduct}>
              <Pencil className="mr-2 size-3.5" /> Rename Product
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive" onClick={onDeleteProduct}>
              <Trash2 className="mr-2 size-3.5" /> Delete Product
            </DropdownMenuItem>
            {row.variantId && <DropdownMenuSeparator />}
          </>
        )}
        {row.variantId && (
          <>
            <DropdownMenuItem onClick={onRenameVariant}>
              <Pencil className="mr-2 size-3.5" /> Rename Variant
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive" onClick={onDeleteVariant}>
              <Trash2 className="mr-2 size-3.5" /> Delete Variant
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
