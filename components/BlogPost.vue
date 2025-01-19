<template>
  <Card>
    <CardImgTop v-if="post?.mainImage" :src="builder.image(post.mainImage).width(1200).fit('crop').url()" alt="" />
    <CardBody>
      <CardTitle>
        <PortableText :value="post?.body || []" />
      </CardTitle>
      <Row v-if="post?.images">
        <Col v-for="img in post.images" :key="img._key">
        <Card>
          <CardImgTop :src="builder.image(img).width(190).height(190).fit('clip').url()" :alt="img._key" :title="img._key" />
          <b-button color="primary" toggle="modal" :target="'#' + img._key">Vis</b-button>
        </Card>

        <Modal :id="img._key" >
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <CloseButton dismiss="modal" />
              </ModalHeader>
              <ModalBody><img :src="builder.image(img).width(1000).fit('scale').url()" style="max-width: 100%;">
              </ModalBody>
            </ModalContent>
          </ModalDialog>
        </Modal>
        </Col>
      </Row>
    </CardBody>
  </Card>
</template>

<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import imageUrlBuilder from '@sanity/image-url'

type Post = {
  author: {
    _ref: string;
    _type: string;
  };

  images: {
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    }
  }[];

  categories: {
    _ref: string;
    _type: string;
    _key: string;
  }[];
  _updatedAt: string;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  body: {
    _type: string;
    style: string;
    _key: string;
    markDefs: any[]; // You can define a type for markDefs if needed
    children: {
      _key: string;
      _type: string;
      marks: any[]; // You can define a type for marks if needed
      text: string;
    }[];
  }[];
};

const runtimeConfig = useRuntimeConfig()

const sanity = useSanity()
const builder = imageUrlBuilder(sanity.config)

defineProps<{
  post?: Post
}>()

</script>

<style lang="css" scoped></style>