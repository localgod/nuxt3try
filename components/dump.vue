<div class="card">
    <img v-if="post?.mainImage" :src="builder.image(post.mainImage).width(1200).fit('crop').url()" class="" alt="...">

    <div class="card-body">
      <h5 class="card-title">
        {{ post?.title }}
      </h5>
      <p class="card-text">
        <PortableText :value="post?.body || []" />
      </p>
      <div v-if="post?.images" class="row row-cols-1 row-cols-md-6 g-4">
        <div v-for="img in post.images" :key="img._key" class="col">
          <div class="card">
            <img
              :src="builder.image(img).width(190).height(190).fit('clip').url()"
              class="card-img-top"
              alt="..."
              data-bs-toggle="modal"
              :data-bs-target="'#' + img._key"
            >
          </div>
          <div :id="img._key" class="modal fade" tabindex="-1" aria-labelledby="Picture" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div class="modal-body">
                  <img :src="builder.image(img).width(1000).fit('scale').url()" style="max-width: 100%;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>