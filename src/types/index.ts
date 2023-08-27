import { FunctionComponent, ReactNode } from 'react';

export type FC<Props = Record<string, any>> = FunctionComponent<Props & { children?: ReactNode | JSX.Element }>;
