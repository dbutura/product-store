import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Modal,
  Text,
  useColorModeValue,
  useToast,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useProductStore } from "../store/product";
import ProductUpdateModal from "./ProductUpdateModal";
import { showToast } from "../utils/toast.js";

const ProductCard = ({ product }) => {
  // const [updatedProduct, setUpdatedProduct] = useState(product);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();

  const toast = useToast();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    showToast(toast, success, message);
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    showToast(toast, success, message);
    onClose();
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ProductUpdateModal
          isOpen={isOpen}
          onClose={onClose}
          product={product}
          onUpdate={handleUpdateProduct}
        />
      </Modal>
    </Box>
  );
};

export default ProductCard;
