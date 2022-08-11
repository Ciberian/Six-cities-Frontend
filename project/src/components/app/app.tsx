import { useAppSelector } from '../../hooks';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getLoadedDataStatus } from '../../store/offers-data/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';

const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path={AppRoute.PageNotFound} element={<PageNotFound />} />
          <Route path='*' element={
            <Navigate to={AppRoute.PageNotFound} />
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
