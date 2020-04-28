import React from 'react'
import PropTypes from 'prop-types'

import {latest} from '@mapbox/mapbox-gl-style-spec'
import InputBlock from '../inputs/InputBlock'
import NumberInput from '../inputs/NumberInput'

class MaxZoomBlock extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.object,
  }

  render() {
    return <InputBlock label={"最大缩放级别"} fieldSpec={latest.layer.maxzoom}
      error={this.props.error}
      data-wd-key="max-zoom"
    >
      <NumberInput
        allowRange={true}
        value={this.props.value}
        onChange={this.props.onChange}
        min={latest.layer.maxzoom.minimum}
        max={latest.layer.maxzoom.maximum}
        default={latest.layer.maxzoom.maximum}
      />
    </InputBlock>
  }
}

export default MaxZoomBlock
