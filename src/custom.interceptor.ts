import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Intercepting the Request!', context);

        return next.handle().pipe(
            map((data) => {
                console.log('Intercepting the Response!', data);
                const response = {
                    ...data,
                    // somethinElse: 'SomeVal'
                };
//                delete response.id;
                return data;
            }),
        );
    }
};