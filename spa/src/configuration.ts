import {OAuthConfiguration} from './oauth/oauthConfiguration';

export interface Configuration {
    businessApiBaseUrl: string;
    spaBaseUrl: string;
    oauth: OAuthConfiguration;
}
