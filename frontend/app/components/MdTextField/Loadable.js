/**
 *
 * Asynchronously loads the component for MdTextField
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
