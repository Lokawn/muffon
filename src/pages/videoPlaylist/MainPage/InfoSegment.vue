<template>
  <BaseSegmentContainer>
    <BaseItemContainer>
      <BaseZoomableImage
        class="image image-90"
        model="videoPlaylist"
        size="small"
        :image-data="imageData"
      />

      <div class="content">
        <div
          class="header"
          v-text="playlistTitle"
        />

        <DescriptionSection
          class="description"
          :playlist-data="playlistData"
        />

        <BaseCounterSection
          class="description"
          scope="videos"
          :count="videosCount"
        />

        <div class="description">
          <BasePublishDateSection
            class="meta"
            :model-data="playlistData"
          />
        </div>
      </div>

      <div class="middle-aligned">
        <BaseSelfIcons
          :bookmark-id="bookmarkId"
        />

        <BaseVideoPlaylistOptionsPopup
          :playlist-data="playlistData"
          :bookmark-id="bookmarkId"
          is-with-bookmark-option
          is-with-share-option
          is-with-external-link-option
        />
      </div>
    </BaseItemContainer>
  </BaseSegmentContainer>
</template>

<script>
import BaseSegmentContainer
  from '@/components/containers/segments/BaseSegmentContainer.vue'
import BaseZoomableImage from '@/components/images/BaseZoomableImage.vue'
import DescriptionSection from './InfoSegment/DescriptionSection.vue'
import BaseCounterSection from '@/components/sections/BaseCounterSection.vue'
import BasePublishDateSection
  from '@/components/sections/BasePublishDateSection.vue'
import BaseSelfIcons from '@/components/models/self/BaseSelfIcons.vue'
import BaseVideoPlaylistOptionsPopup
  from '@/components/popups/videoPlaylist/BaseVideoPlaylistOptionsPopup.vue'
import BaseItemContainer
  from '@/components/containers/item/BaseItemContainer.vue'
import selfMixin from '@/mixins/selfMixin'

export default {
  name: 'InfoSegment',
  components: {
    BaseSegmentContainer,
    BaseZoomableImage,
    DescriptionSection,
    BaseCounterSection,
    BasePublishDateSection,
    BaseSelfIcons,
    BaseVideoPlaylistOptionsPopup,
    BaseItemContainer
  },
  mixins: [
    selfMixin
  ],
  props: {
    playlistData: {
      type: Object,
      required: true
    }
  },
  computed: {
    modelData () {
      return this.playlistData
    },
    imageData () {
      return this.playlistData.image
    },
    playlistTitle () {
      return this.playlistData.title
    },
    videosCount () {
      return this.playlistData.videos_count
    }
  }
}
</script>

<style lang="sass" scoped></style>
