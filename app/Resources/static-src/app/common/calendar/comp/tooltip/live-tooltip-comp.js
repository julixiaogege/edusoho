import BaseTooltipComp from './base-tooltip-comp'

export default class LiveTooltip extends BaseTooltipComp {

  _getParamNames() {
    return ['id', 'title'];
  }

  _showTip(params, event, jsEvent) {
    console.log('show live tip', params);
  }

  _hideTip(params, event, jsEvent) {
    console.log('hide live tip', params);
  }
}