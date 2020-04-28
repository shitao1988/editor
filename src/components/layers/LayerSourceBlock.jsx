import React from 'react'
import PropTypes from 'prop-types'

import {latest} from '@mapbox/mapbox-gl-style-spec'
import InputBlock from '../inputs/InputBlock'
import AutocompleteInput from '../inputs/AutocompleteInput'

class LayerSourceBlock extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    wdKey: PropTypes.string,
    onChange: PropTypes.func,
    sourceIds: PropTypes.array,
    error: PropTypes.object,
  }

  static defaultProps = {
    onChange: () => {},
    sourceIds: [],
  }

  render() {
    return <InputBlock
      label={"数据源"}
      fieldSpec={latest.layer.source}
      error={this.props.error}
      data-wd-key={this.props.wdKey}
    >
      <AutocompleteInput
        value={this.props.value}
        onChange={this.props.onChange}
        options={this.props.sourceIds.map(src => [src, src])}
      />
    </InputBlock>
  }
}

export default LayerSourceBlock
