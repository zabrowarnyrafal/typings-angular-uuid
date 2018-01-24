/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {

    export namespace uuid{
        
        interface BufferClass extends ArrayBuffer{ }

        interface Options{
            clockseq?: number;
            msecs?: number;
            node?: number[];
            nsecs?: number;
            random?: number[];
            rng?: Function;
        }

        interface IAngularUUIDFactory{
            /**
             * Generate and return a RFC4122 v1 UUID.
             * Returns buffer.
             * @param options Options parameterizing uuid generation.
             * @param buffer Array where UUID bytes are to be written.
             * @param offset Starting index in buffer at which to begin writing.
             */
            v1:(options?:angular.uuid.Options, buffer?:BufferClass, offset?:number) => BufferClass | string;
            /**
             * Generate and return a RFC4122 v4 UUID.
             * Returns buffer.
             * @param options Options parameterizing uuid generation.
             * @param buffer Array where UUID bytes are to be written.
             * @param offset Starting index in buffer at which to begin writing.
             */
            v4:(options?:angular.uuid.Options, buffer?:BufferClass, offset?:number) => BufferClass | string;
            /**
             * Parse UUIDs
             * @param uuidStr UUID(-like) string
             * @param buffer Array where UUID bytes are to be written. Default: A new Array is used
             * @param offset Starting index in buffer at which to begin writing. Default: 0
             */
            parse:(uuidStr:string, buffer?:BufferClass, offset?:number)=> BufferClass;
            /**
             * Unparse UUIDs
             * @param buffer Array where UUID bytes are to be written. Default: A new Array is used
             * @param offset Starting index in buffer at which to begin writing. Default: 0
             */
            unparse:(buffer:BufferClass, offset?:number)=> string;
            BufferClass:BufferClass ;
        }
    }
}