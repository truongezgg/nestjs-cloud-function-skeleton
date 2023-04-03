import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic:1680082746967';
/**
 * Mark this as the public API
 *
 * Put it before the method you want to ignore JwtAuthGuard.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
