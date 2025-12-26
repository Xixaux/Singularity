import SingularityUtils from '@singularity/utils';
import _ from 'lodash';
import { ScrumboardMember } from '../ScrumboardApi';

/**
 * The Member model.
 */
function MemberModel(data: Partial<ScrumboardMember>): ScrumboardMember {
	data = data || {};

	return _.defaults(data, {
		id: SingularityUtils.generateGUID(),
		name: '',
		avatar: '',
		class: ''
	});
}

export default MemberModel;
