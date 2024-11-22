import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-ZBHYGT5SPT');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};
