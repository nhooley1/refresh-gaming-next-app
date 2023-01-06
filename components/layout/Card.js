import Link from 'next/link';
import { Box, Card, Image, Text } from '@chakra-ui/core';

const Card = ({ title, imageUrl, linkUrl }) => {
  return (
    <Link href={linkUrl}>
      <Card
        as="a"
        boxShadow="md"
        cursor="pointer"
        borderRadius="md"
        overflow="hidden"
      >
        <Image src={imageUrl} alt={title} />
        <Box p="6">
          <Text
            fontWeight="bold"
            fontSize="xl"
            lineHeight="shorter"
            color="gray.800"
          >
            {title}
          </Text>
        </Box>
      </Card>
    </Link>
  );
};

export default Card;
