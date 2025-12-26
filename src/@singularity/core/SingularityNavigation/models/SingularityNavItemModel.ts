import _ from 'lodash';
import { PartialDeep } from 'type-fest';
import { SingularityNavItemType } from '../types/SingularityNavItemType';

/**
 *  SingularityNavItemModel
 *  Constructs a navigation item based on SingularityNavItemType
 */
function SingularityNavItemModel(data?: PartialDeep<SingularityNavItemType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		title: '',
		translate: '',
		auth: null,
		subtitle: '',
		icon: '',
		iconClass: '',
		url: '',
		target: '',
		type: 'item',
		sx: {},
		disabled: false,
		active: false,
		exact: false,
		end: false,
		badge: null,
		children: []
	});
}

export default SingularityNavItemModel;
