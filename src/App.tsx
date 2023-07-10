import { Routes, Route } from 'react-router-dom'
import routes from './config/routes'

function App() {
    return (
        <>
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
        </>
    )
}

export default App
