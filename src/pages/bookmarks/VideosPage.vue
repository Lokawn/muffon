<template>
  <BaseBookmarksPaginatedPageContainer
    :key="refreshKey"
    model="bookmarkVideo"
    :scope="scope"
    :limit="limit"
    :order="order"
    :view-id="viewId"
    is-with-top-segment
    is-with-order-change
    is-with-view-change
    is-with-reload-button
  >
    <template
      #default="slotProps"
    >
      <BaseVideosList
        :videos="slotProps[scope]"
        :view-id="viewId"
        is-with-channel-title
        is-with-created
        is-bookmark
        is-with-favorite-option
        is-with-watched-option
        is-with-share-option
        is-with-external-link-option
        is-with-delete-option
      />
    </template>
  </BaseBookmarksPaginatedPageContainer>
</template>

<script>
import BaseBookmarksPaginatedPageContainer
  from '@/components/containers/pages/bookmarks/BaseBookmarksPaginatedPageContainer.vue'
import BaseVideosList from '@/components/lists/videos/BaseVideosList.vue'
import orderChangeMixin from '@/mixins/orderChangeMixin'
import viewChangeMixin from '@/mixins/viewChangeMixin'
import pageMixin from '@/mixins/pageMixin'

export default {
  name: 'VideosPage',
  components: {
    BaseBookmarksPaginatedPageContainer,
    BaseVideosList
  },
  mixins: [
    orderChangeMixin,
    viewChangeMixin,
    pageMixin
  ],
  data () {
    return {
      viewId: 'simple',
      scope: 'videos',
      order: 'createdDesc'
    }
  }
}
</script>

<style lang="sass" scoped></style>
