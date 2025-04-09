import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const ProductUpdateModal = ({ isOpen, onClose, product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  return (
    <ModalContent>
      <ModalHeader>Update Product</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VStack spacing={4}>
          <Input
            placeholder="Product Name"
            name="name"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
          />
          <Input
            placeholder="Price"
            name="price"
            type="number"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                price: e.target.value,
              })
            }
          />
          <Input
            placeholder="Image URL"
            name="image"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                image: e.target.value,
              })
            }
          />
        </VStack>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="blue"
          mr={3}
          onClick={() => onUpdate(product._id, updatedProduct)}
        >
          Update
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default ProductUpdateModal;
