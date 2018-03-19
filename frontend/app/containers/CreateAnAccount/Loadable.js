/**
 *
 * Asynchronously loads the component for CreateAnAccount
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
