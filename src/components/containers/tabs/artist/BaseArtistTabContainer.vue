<template>
  <BasePaginatedTabContainer
    :response-data="artistData"
    :scope="scope"
    :limit="limit"
    :response-page-limit="responsePageLimit"
    :is-loading="isLoading"
    :error="error"
    :is-active="isActive"
    :more-link="moreLink"
    :is-with-top-section="isWithTopSection"
    :is-with-play-button="isWithPlayButton"
    @focus="handleFocus"
    @activate="handleActivate"
  >
    <template
      #topPlayButton
    >
      <slot
        name="topPlayButton"
      />
    </template>

    <template
      #default="slotProps"
    >
      <slot
        :[scope]="slotProps[scope]"
        :top-track-count="topTrackCount"
      />
    </template>
  </BasePaginatedTabContainer>
</template>

<script>
import tabContainerMixin from '@/mixins/tabContainerMixin'
import getArtist from '@/helpers/actions/api/artist/get'
import {
  tracks as formatArtistTracksLink,
  albums as formatArtistAlbumsLink,
  similar as formatArtistSimilarLink,
  shows as formatArtistShowsLink
} from '@/helpers/formatters/links/artist'

export default {
  name: 'BaseArtistTabContainer',
  mixins: [
    tabContainerMixin
  ],
  props: {
    artistName: {
      type: String,
      required: true
    },
    responsePageLimit: Number
  },
  data () {
    return {
      artistData: null,
      topTrackCount: null
    }
  },
  computed: {
    artistArgs () {
      return {
        artistName: this.artistName,
        scope: this.scope,
        limit: this.limit
      }
    },
    moreLink () {
      switch (this.scope) {
        case 'tracks':
          return formatArtistTracksLink(
            {
              artistName: this.artistName
            }
          )
        case 'albums':
          return formatArtistAlbumsLink(
            {
              artistName: this.artistName
            }
          )
        case 'similar':
          return formatArtistSimilarLink(
            {
              artistName: this.artistName
            }
          )
        case 'shows':
          return formatArtistShowsLink(
            {
              artistName: this.artistName
            }
          )
        default:
          return {}
      }
    }
  },
  methods: {
    getArtist,
    getData (
      {
        page
      } = {}
    ) {
      this.getArtist(
        {
          ...this.artistArgs,
          page
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
