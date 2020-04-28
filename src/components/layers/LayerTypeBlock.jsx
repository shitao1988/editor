import React from 'react'
import PropTypes from 'prop-types'

import {latest} from '@mapbox/mapbox-gl-style-spec'
import InputBlock from '../inputs/InputBlock'
import SelectInput from '../inputs/SelectInput'
import StringInput from '../inputs/StringInput'

class LayerTypeBlock extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    wdKey: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.object,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
  }

  render() {
    return <InputBlock label={"类型"} fieldSpec={latest.layer.type}
      data-wd-key={this.props.wdKey}
      error={this.props.error}
    >
      {this.props.disabled &&
        <StringInput
          value={this.props.value}
          disabled={true}
        />
      }
      {!this.props.disabled &&
        <SelectInput
          options={[
          ['background', '背景'],
          ['fill', '面'],
          ['line', '线'],
          ['symbol', '标注'],
          ['raster', '栅格'],
          ['circle', '圆'],
          ['fill-extrusion', '立体面'],
          ['hillshade', '山体阴影'],
          ['heatmap', '热图'],
          ]}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      }
    </InputBlock>
  }
}

export default LayerTypeBlock
