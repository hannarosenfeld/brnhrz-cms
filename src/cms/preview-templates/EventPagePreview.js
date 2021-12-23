import React from 'react'
import PropTypes from 'prop-types'
import { EventPageTemplate } from '../../templates/about-page'

const EventPagePreview = ({ entry, widgetFor }) => (
  <EventPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

EventPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPagePreview
