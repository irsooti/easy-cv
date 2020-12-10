import wretch from 'wretch';
import appConfig from '../appConfig';

const defaultApi = wretch().url(appConfig.api);

export default defaultApi;
