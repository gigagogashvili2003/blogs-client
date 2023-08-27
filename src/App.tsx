import { Routes, Route } from 'react-router-dom';
import { routes } from './config';
import Provider from './theme/theme-provider';

function App() {
    return (
        <Provider theme="light">
            <Routes>
                {routes.map(({ path, Layout, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Layout>
                                <Component />
                            </Layout>
                        }
                    />
                ))}
            </Routes>
        </Provider>
    );
}

export default App;
