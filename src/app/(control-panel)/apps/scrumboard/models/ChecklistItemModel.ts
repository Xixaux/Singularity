import SingularityUtils from '@singularity/utils';
import _ from 'lodash';
import { PartialDeep } from 'type-fest';
import { ScrumboardCheckListItem } from '../ScrumboardApi';

/**
 * The checklist item model.
 */
function ChecklistItemModel(data: PartialDeep<ScrumboardCheckListItem>): ScrumboardCheckListItem {
	data = data || {};

	return _.defaults(data, {
		id: SingularityUtils.generateGUID(),
		name: '',
		checked: false
	});
}

export default ChecklistItemModel;
