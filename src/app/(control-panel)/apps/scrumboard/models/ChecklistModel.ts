import SingularityUtils from '@singularity/utils';
import _ from 'lodash';
import { PartialDeep } from 'type-fest';
import { ScrumboardChecklist } from '../ScrumboardApi';

/**
 * The checklist model.
 */
function ChecklistModel(data: PartialDeep<ScrumboardChecklist>): ScrumboardChecklist {
	data = data || {};

	return _.defaults(data, {
		id: SingularityUtils.generateGUID(),
		name: '',
		checkItems: []
	});
}

export default ChecklistModel;
