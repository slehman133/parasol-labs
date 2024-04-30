"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { adminGetProducts, adminEditQuantity } from "@/utils/shopifyAdmin";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { title } from "process";
import { useRouter, useSearchParams } from "next/navigation";

const ProductDisplay = ({ products }: { products: any }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [inventoryToChange, setInventoryToChange] = useState({
    id: 0,
    variantId: 0,
    totalInventory: 0,
  });

  const [priceToChange, setPriceToChange] = useState({
    id: 0,
    variantId: 0,
    price: 0,
  });

  const [itemToDelete, setItemToDelete] = useState({
    id: 0,
    variantId: 0,
    title: "",
  });

  const [titleToChange, setTitleToChange] = useState({
    id: 0,
    variantId: 0,
    title: "",
  });

  const [descriptionToChange, setDescriptionToChange] = useState({
    id: 0,
    variantId: 0,
    description: "",
  });

  const [imageToChange, setImageToChange] = useState({
    id: 0,
    variantId: 0,
    imageUrl: "",
    altText: "",
  });

  const [changing, setChanging] = useState("");
  const [formData, setFormData] = useState(new FormData());
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const image = useSearchParams().get("image");

  const handleBroadcast = async () => {
    //fetch all 
  };

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {changing === "inventory" && (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Change Quantity
                  </ModalHeader>
                  <ModalBody className="gap-1">
                    <form>
                      <label>Enter Change:</label>
                      <input
                        className="ml-2"
                        type="number"
                        onChange={(e) =>
                          setInventoryToChange({
                            ...inventoryToChange,
                            totalInventory: parseInt(e.target.value),
                          })
                        }
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={async () => {
                        const res = await fetch("/api/admin", {
                          method: "PATCH",
                          body: JSON.stringify({
                            event: "edit-quantity",
                            id: inventoryToChange.id,
                            variantId: inventoryToChange.variantId,
                            quantity: inventoryToChange.totalInventory,
                          }),
                        });
                        onClose();
                      }}
                    >
                      Change
                    </Button>
                  </ModalFooter>
                </>
              )}
              {changing === "price" && (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Change Price
                  </ModalHeader>
                  <ModalBody className="gap-1">
                    <form>
                      <label>Enter Price:</label>
                      <input
                        className="ml-2"
                        type="float"
                        onChange={(e) =>
                          setPriceToChange({
                            ...priceToChange,
                            price: parseFloat(e.target.value),
                          })
                        }
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={async () => {
                        const res = await fetch("/api/admin/product/price", {
                          method: "PATCH",
                          body: JSON.stringify({
                            event: "edit-price",
                            id: priceToChange.id,
                            variantId: priceToChange.variantId,
                            price: priceToChange.price,
                          }),
                        });
                        onClose();
                      }}
                    >
                      Change
                    </Button>
                  </ModalFooter>
                </>
              )}
              {changing === "delete" && (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Delete Item
                  </ModalHeader>
                  <ModalBody className="gap-1">
                    <div className="text-center">
                      Are you sure you want to delete {itemToDelete.title}?
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="danger"
                      onPress={async () => {
                        const res = await fetch("/api/admin/product", {
                          method: "DELETE",
                          body: JSON.stringify(itemToDelete),
                        });
                        onClose();
                      }}
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </>
              )}
              {changing === "title" && (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Change Title
                  </ModalHeader>
                  <ModalBody className="gap-1">
                    <form>
                      <label>Enter New Title:</label>
                      <input
                        className="ml-2"
                        type="text"
                        onChange={(e) =>
                          setTitleToChange({
                            ...titleToChange,
                            title: e.target.value,
                          })
                        }
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={async () => {
                        const res = await fetch("/api/admin/product/title", {
                          method: "PATCH",
                          body: JSON.stringify(titleToChange),
                        });
                        onClose();
                      }}
                    >
                      Change
                    </Button>
                  </ModalFooter>
                </>
              )}
              {changing === "description" && (
                <>
                  <ModalHeader className="flex flex-col gap-1 items-center">
                    Change Description
                  </ModalHeader>
                  <ModalBody className="gap-1">
                    <form className="flex flex-col">
                      <label>Enter New Description:</label>
                      <textarea
                        className="h-40"
                        onChange={(e) =>
                          setDescriptionToChange({
                            ...descriptionToChange,
                            description: e.target.value,
                          })
                        }
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={async () => {
                        const res = await fetch(
                          "/api/admin/product/description",
                          {
                            method: "PATCH",
                            body: JSON.stringify(descriptionToChange),
                          }
                        );
                        onClose();
                      }}
                    >
                      Change
                    </Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
      <Table classNames={classNames} isCompact removeWrapper>
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Inventory</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Delete Item</TableColumn>
        </TableHeader>
        <TableBody>
          {products.map((e: any) => {
            const {
              id,
              title,
              description,
              totalInventory,
              handle,
              priceRange: {
                minVariantPrice: { amount },
              },
              variants: { edges },
            } = e.node;
            const variantId = edges[0].node.id;
            const image = e.node.images?.edges[0]?.node.transformedSrc
              ? e.node.images.edges[0].node.transformedSrc
              : `/images/${handle}.jpg`;
            return (
              <TableRow key={id}>
                <TableCell>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setTitleToChange({ id, variantId, title });
                      setChanging("title");
                      onOpen();
                    }}
                  >
                    {title}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setInventoryToChange({ id, totalInventory, variantId });
                      setChanging("inventory");
                      onOpen();
                    }}
                  >
                    {totalInventory}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setPriceToChange({ id, price: amount, variantId });
                      setChanging("price");
                      onOpen();
                    }}
                  >
                    ${Number(amount).toFixed(2)}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setDescriptionToChange({ id, variantId, description });
                      setChanging("description");
                      onOpen();
                    }}
                  >
                    {description}
                  </div>
                </TableCell>
                <TableCell>
                  <img src={image} />
                </TableCell>
                <TableCell>
                  <div
                    className="cursor-pointer bg-red-600 text-white p-2
                                        rounded-md text-center"
                    onClick={() => {
                      setItemToDelete({ id, variantId, title });
                      setChanging("delete");
                      onOpen();
                    }}
                  >
                    Delete
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDisplay;
