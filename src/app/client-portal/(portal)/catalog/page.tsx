"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  Building2,
  ShoppingBag,
  Tag,
  ChevronRight,
  MoreHorizontal,
  Pencil,
  Trash2,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Variant {
  id: string;
  name: string;
  sku?: string;
}

interface Product {
  id: string;
  name: string;
  variants: Variant[];
}

interface Brand {
  id: string;
  name: string;
  products: Product[];
}

const initialCatalog: Brand[] = [
  {
    id: "b1",
    name: "Acme Beauty",
    products: [
      {
        id: "p1",
        name: "Radiance Serum",
        variants: [
          { id: "v1", name: "30ml Original", sku: "SKU-1001" },
          { id: "v2", name: "50ml Deluxe", sku: "SKU-1002" },
          { id: "v3", name: "15ml Travel", sku: "SKU-1003" },
        ],
      },
      {
        id: "p2",
        name: "Glow Moisturizer",
        variants: [
          { id: "v4", name: "Day Cream SPF30", sku: "SKU-2001" },
          { id: "v5", name: "Night Cream", sku: "SKU-2002" },
        ],
      },
      {
        id: "p3",
        name: "Lip Color Kit",
        variants: [
          { id: "v6", name: "Berry Collection", sku: "SKU-3001" },
          { id: "v7", name: "Nude Collection", sku: "SKU-3002" },
          { id: "v8", name: "Bold Collection", sku: "SKU-3003" },
        ],
      },
    ],
  },
  {
    id: "b2",
    name: "Acme Wellness",
    products: [
      {
        id: "p4",
        name: "Vitality Supplement",
        variants: [
          { id: "v9", name: "60 Capsules", sku: "SKU-4001" },
          { id: "v10", name: "120 Capsules", sku: "SKU-4002" },
        ],
      },
      {
        id: "p5",
        name: "Calm Tea Blend",
        variants: [
          { id: "v11", name: "20 Sachets", sku: "SKU-5001" },
          { id: "v12", name: "40 Sachets", sku: "SKU-5002" },
        ],
      },
    ],
  },
  {
    id: "b3",
    name: "FreshHome",
    products: [
      {
        id: "p6",
        name: "Linen Spray",
        variants: [
          { id: "v13", name: "Lavender 250ml", sku: "SKU-6001" },
          { id: "v14", name: "Eucalyptus 250ml", sku: "SKU-6002" },
        ],
      },
    ],
  },
];

function InlineInput({
  placeholder,
  onConfirm,
  onCancel,
  autoFocus = true,
}: {
  placeholder: string;
  onConfirm: (value: string) => void;
  onCancel: () => void;
  autoFocus?: boolean;
}) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && value.trim()) {
      onConfirm(value.trim());
    } else if (e.key === "Escape") {
      onCancel();
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <input
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="h-7 flex-1 rounded-md border border-ring bg-transparent px-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring/50"
      />
      <Button
        variant="ghost"
        size="icon-xs"
        className="text-emerald-500 hover:text-emerald-600"
        onClick={() => value.trim() && onConfirm(value.trim())}
        disabled={!value.trim()}
      >
        <Check className="size-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon-xs"
        className="text-muted-foreground"
        onClick={onCancel}
      >
        <X className="size-3.5" />
      </Button>
    </div>
  );
}

function RenameInput({
  initial,
  onConfirm,
  onCancel,
}: {
  initial: string;
  onConfirm: (value: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState(initial);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && value.trim()) {
      onConfirm(value.trim());
    } else if (e.key === "Escape") {
      onCancel();
    }
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
      <Button
        variant="ghost"
        size="icon-xs"
        className="text-emerald-500 hover:text-emerald-600"
        onClick={() => value.trim() && onConfirm(value.trim())}
        disabled={!value.trim()}
      >
        <Check className="size-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon-xs"
        className="text-muted-foreground"
        onClick={onCancel}
      >
        <X className="size-3.5" />
      </Button>
    </div>
  );
}

function RowActions({
  onRename,
  onDelete,
  label,
}: {
  onRename: () => void;
  onDelete: () => void;
  label: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon-xs"
            className="text-muted-foreground opacity-0 transition-opacity group-hover/row:opacity-100"
          />
        }
      >
        <MoreHorizontal className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onRename}>
          <Pencil className="mr-2 size-3.5" /> Rename
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive" onClick={onDelete}>
          <Trash2 className="mr-2 size-3.5" /> Delete {label}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function CatalogPage() {
  const [brands, setBrands] = useState<Brand[]>(initialCatalog);
  const [expandedBrands, setExpandedBrands] = useState<Set<string>>(
    new Set(initialCatalog.map((b) => b.id))
  );
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [addingBrand, setAddingBrand] = useState(false);
  const [addingProductFor, setAddingProductFor] = useState<string | null>(null);
  const [addingVariantFor, setAddingVariantFor] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);

  const totalProducts = brands.reduce((s, b) => s + b.products.length, 0);
  const totalVariants = brands.reduce(
    (s, b) => s + b.products.reduce((ps, p) => ps + p.variants.length, 0),
    0
  );

  function toggleBrand(id: string) {
    setExpandedBrands((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleProduct(id: string) {
    setExpandedProducts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function addBrand(name: string) {
    const id = `b-${Date.now()}`;
    setBrands((prev) => [...prev, { id, name, products: [] }]);
    setExpandedBrands((prev) => new Set(prev).add(id));
    setAddingBrand(false);
  }

  function addProduct(brandId: string, name: string) {
    const id = `p-${Date.now()}`;
    setBrands((prev) =>
      prev.map((b) =>
        b.id === brandId ? { ...b, products: [...b.products, { id, name, variants: [] }] } : b
      )
    );
    setExpandedProducts((prev) => new Set(prev).add(id));
    setAddingProductFor(null);
  }

  function addVariant(productId: string, name: string) {
    const id = `v-${Date.now()}`;
    setBrands((prev) =>
      prev.map((b) => ({
        ...b,
        products: b.products.map((p) =>
          p.id === productId ? { ...p, variants: [...p.variants, { id, name }] } : p
        ),
      }))
    );
    setAddingVariantFor(null);
  }

  function renameBrand(brandId: string, name: string) {
    setBrands((prev) => prev.map((b) => (b.id === brandId ? { ...b, name } : b)));
    setRenamingId(null);
  }

  function renameProduct(productId: string, name: string) {
    setBrands((prev) =>
      prev.map((b) => ({
        ...b,
        products: b.products.map((p) => (p.id === productId ? { ...p, name } : p)),
      }))
    );
    setRenamingId(null);
  }

  function renameVariant(variantId: string, name: string) {
    setBrands((prev) =>
      prev.map((b) => ({
        ...b,
        products: b.products.map((p) => ({
          ...p,
          variants: p.variants.map((v) => (v.id === variantId ? { ...v, name } : v)),
        })),
      }))
    );
    setRenamingId(null);
  }

  function deleteBrand(brandId: string) {
    setBrands((prev) => prev.filter((b) => b.id !== brandId));
  }

  function deleteProduct(productId: string) {
    setBrands((prev) =>
      prev.map((b) => ({ ...b, products: b.products.filter((p) => p.id !== productId) }))
    );
  }

  function deleteVariant(variantId: string) {
    setBrands((prev) =>
      prev.map((b) => ({
        ...b,
        products: b.products.map((p) => ({
          ...p,
          variants: p.variants.filter((v) => v.id !== variantId),
        })),
      }))
    );
  }

  const filtered = searchQuery.trim()
    ? brands
        .map((b) => {
          const q = searchQuery.toLowerCase();
          const matchingProducts = b.products
            .map((p) => {
              const matchingVariants = p.variants.filter((v) =>
                v.name.toLowerCase().includes(q) || (v.sku && v.sku.toLowerCase().includes(q))
              );
              if (p.name.toLowerCase().includes(q)) return p;
              if (matchingVariants.length > 0) return { ...p, variants: matchingVariants };
              return null;
            })
            .filter(Boolean) as Product[];
          if (b.name.toLowerCase().includes(q)) return b;
          if (matchingProducts.length > 0) return { ...b, products: matchingProducts };
          return null;
        })
        .filter(Boolean) as Brand[]
    : brands;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Product Catalog</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your brands, products, and variants. This hierarchy defines
            the scope for compositions and synthesis.
          </p>
        </div>
        <Button size="sm" onClick={() => setAddingBrand(true)}>
          <Plus className="mr-1.5 size-3.5" />
          Add Brand
        </Button>
      </div>

      {/* Summary stats */}
      <div className="flex gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="size-3.5 text-primary" />
          <span>
            <span className="font-semibold text-foreground">{brands.length}</span> brand
            {brands.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShoppingBag className="size-3.5 text-amber-500" />
          <span>
            <span className="font-semibold text-foreground">{totalProducts}</span> product
            {totalProducts !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Tag className="size-3.5 text-violet-400" />
          <span>
            <span className="font-semibold text-foreground">{totalVariants}</span> variant
            {totalVariants !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search brands, products, or variants…"
          className="h-9 w-full rounded-lg border border-input bg-transparent pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50"
        />
      </div>

      {/* Add brand inline */}
      <AnimatePresence>
        {addingBrand && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl border border-ring/50 bg-card p-4">
              <p className="mb-2 text-xs font-medium text-muted-foreground">New brand name</p>
              <InlineInput
                placeholder="e.g. My Brand"
                onConfirm={addBrand}
                onCancel={() => setAddingBrand(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tree */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
            <Building2 className="size-6 text-muted-foreground" />
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">
            {searchQuery ? "No results found" : "No brands yet"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {searchQuery
              ? "Try a different search term."
              : "Add your first brand to start building your product catalog."}
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-3"
        >
          {filtered.map((brand) => {
            const isBrandOpen = expandedBrands.has(brand.id);
            const brandVariants = brand.products.reduce((s, p) => s + p.variants.length, 0);

            return (
              <div
                key={brand.id}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                {/* Brand row */}
                <div
                  className="group/row flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/30"
                  onClick={() => toggleBrand(brand.id)}
                >
                  <ChevronRight
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isBrandOpen && "rotate-90"
                    )}
                  />
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    {renamingId === brand.id ? (
                      <div onClick={(e) => e.stopPropagation()}>
                        <RenameInput
                          initial={brand.name}
                          onConfirm={(name) => renameBrand(brand.id, name)}
                          onCancel={() => setRenamingId(null)}
                        />
                      </div>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-foreground">
                          {brand.name}
                        </span>
                        <span className="ml-3 text-xs text-muted-foreground">
                          {brand.products.length} product
                          {brand.products.length !== 1 ? "s" : ""} &middot;{" "}
                          {brandVariants} variant
                          {brandVariants !== 1 ? "s" : ""}
                        </span>
                      </>
                    )}
                  </div>
                  {renamingId !== brand.id && (
                    <div onClick={(e) => e.stopPropagation()}>
                      <RowActions
                        label="brand"
                        onRename={() => setRenamingId(brand.id)}
                        onDelete={() => deleteBrand(brand.id)}
                      />
                    </div>
                  )}
                </div>

                {/* Products */}
                <AnimatePresence>
                  {isBrandOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-border/50"
                    >
                      {brand.products.map((product) => {
                        const isProductOpen = expandedProducts.has(product.id);

                        return (
                          <div key={product.id}>
                            {/* Product row */}
                            <div
                              className="group/row flex cursor-pointer items-center gap-3 border-b border-border/50 py-2.5 pl-10 pr-3 transition-colors hover:bg-muted/30"
                              onClick={() => toggleProduct(product.id)}
                            >
                              <ChevronRight
                                className={cn(
                                  "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200",
                                  isProductOpen && "rotate-90"
                                )}
                              />
                              <ShoppingBag className="size-3.5 shrink-0 text-amber-500" />
                              <div className="flex-1 min-w-0">
                                {renamingId === product.id ? (
                                  <div onClick={(e) => e.stopPropagation()}>
                                    <RenameInput
                                      initial={product.name}
                                      onConfirm={(name) => renameProduct(product.id, name)}
                                      onCancel={() => setRenamingId(null)}
                                    />
                                  </div>
                                ) : (
                                  <span className="text-sm font-medium text-foreground">
                                    {product.name}
                                  </span>
                                )}
                              </div>
                              {renamingId !== product.id && (
                                <>
                                  <span className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                                    {product.variants.length} variant
                                    {product.variants.length !== 1 ? "s" : ""}
                                  </span>
                                  <div onClick={(e) => e.stopPropagation()}>
                                    <RowActions
                                      label="product"
                                      onRename={() => setRenamingId(product.id)}
                                      onDelete={() => deleteProduct(product.id)}
                                    />
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Variants */}
                            <AnimatePresence>
                              {isProductOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  {product.variants.map((variant) => (
                                    <div
                                      key={variant.id}
                                      className="group/row flex items-center gap-3 border-b border-border/50 py-2 pl-20 pr-3 transition-colors hover:bg-muted/30 last:border-b-0"
                                    >
                                      <Tag className="size-3.5 shrink-0 text-violet-400" />
                                      <div className="flex-1 min-w-0">
                                        {renamingId === variant.id ? (
                                          <RenameInput
                                            initial={variant.name}
                                            onConfirm={(name) =>
                                              renameVariant(variant.id, name)
                                            }
                                            onCancel={() => setRenamingId(null)}
                                          />
                                        ) : (
                                          <span className="text-sm text-foreground">
                                            {variant.name}
                                          </span>
                                        )}
                                      </div>
                                      {renamingId !== variant.id && (
                                        <>
                                          {variant.sku && (
                                            <span className="rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                                              {variant.sku}
                                            </span>
                                          )}
                                          <RowActions
                                            label="variant"
                                            onRename={() => setRenamingId(variant.id)}
                                            onDelete={() => deleteVariant(variant.id)}
                                          />
                                        </>
                                      )}
                                    </div>
                                  ))}

                                  {/* Add variant inline */}
                                  {addingVariantFor === product.id ? (
                                    <div className="py-2 pl-20 pr-3">
                                      <InlineInput
                                        placeholder="Variant name"
                                        onConfirm={(name) => addVariant(product.id, name)}
                                        onCancel={() => setAddingVariantFor(null)}
                                      />
                                    </div>
                                  ) : (
                                    <div className="py-1.5 pl-20">
                                      <Button
                                        variant="ghost"
                                        size="xs"
                                        className="text-muted-foreground hover:text-primary"
                                        onClick={() => setAddingVariantFor(product.id)}
                                      >
                                        <Plus className="mr-1 size-3" /> Add variant
                                      </Button>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}

                      {/* Add product inline */}
                      {addingProductFor === brand.id ? (
                        <div className="border-t border-border/50 py-2.5 pl-10 pr-3">
                          <InlineInput
                            placeholder="Product name"
                            onConfirm={(name) => addProduct(brand.id, name)}
                            onCancel={() => setAddingProductFor(null)}
                          />
                        </div>
                      ) : (
                        <div className="border-t border-border/50 py-2 pl-10">
                          <Button
                            variant="ghost"
                            size="xs"
                            className="text-muted-foreground hover:text-primary"
                            onClick={() => setAddingProductFor(brand.id)}
                          >
                            <Plus className="mr-1 size-3" /> Add product
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
