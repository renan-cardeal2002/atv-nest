import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse, ResponseType } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class RequestService {
  constructor(private readonly httpService: HttpService) {}

  get(
    url: string,
    responseType: ResponseType = 'json',
  ): Observable<AxiosResponse<any>> {
    const options = { responseType: responseType };
    return this.httpService.get(url, options);
  }

  post(
    url: string,
    data: any,
    responseType: ResponseType = 'json',
  ): Observable<AxiosResponse<any>> {
    const options = { responseType: responseType };
    return this.httpService.post(url, data, options);
  }

  put(
    url: string,
    data: any,
    responseType: ResponseType = 'json',
  ): Observable<AxiosResponse<any>> {
    const options = { responseType: responseType };
    return this.httpService.put(url, data, options);
  }

  patch(
    url: string,
    data: any,
    responseType: ResponseType = 'json',
  ): Observable<AxiosResponse<any>> {
    const options = { responseType: responseType };
    return this.httpService.patch(url, data, options);
  }

  delete(
    url: string,
    responseType: ResponseType = 'json',
  ): Observable<AxiosResponse<any>> {
    const options = { responseType: responseType };
    return this.httpService.delete(url, options);
  }
}
