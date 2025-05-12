import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { MePage } from '../pages/me';
import { MartPage } from '../pages/mart';
import { FindPage } from '../pages/find';
import { IdentifyPage } from '../pages/identify';
import { NavWrapper } from '../pages/wrapper/bottom';
import { ReportPage } from '../pages/report';
import { RealReportPage } from '../pages/real-report';
import { RiskPage } from '../pages/risk';
import { FindDoctorPage } from '../pages/findDoctor';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <NavWrapper>
        <HomePage />
      </NavWrapper>
    ),
  },
  {
    path: '/me',
    element: (
      <NavWrapper>
        <MePage />
      </NavWrapper>
    ),
  },
  {
    path: '/mart',
    element: (
      <NavWrapper>
        <MartPage />
      </NavWrapper>
    ),
  },
  {
    path: '/find',
    element: (
      <NavWrapper>
        <FindPage />
      </NavWrapper>
    ),
  },
  {
    path: '/identify',
    element: <IdentifyPage />,
  },
  {
    path: '/report',
    element: <ReportPage />,
  },
  {
    path: '/real-report',
    element: <RealReportPage />,
  },
  {
    path: '/risk',
    element: <RiskPage />,
  },
  {
    path: '/find-doctor',
    element: <FindDoctorPage />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

export default router;
