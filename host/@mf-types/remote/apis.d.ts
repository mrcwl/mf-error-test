
    export type RemoteKeys = 'remote/Test';
    type PackageType<T> = T extends 'remote/Test' ? typeof import('remote/Test') :any;