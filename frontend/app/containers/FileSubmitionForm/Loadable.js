/**
 *
 * Asynchronously loads the component for FileSubmitionForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
