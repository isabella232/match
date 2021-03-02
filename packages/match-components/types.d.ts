declare module "flagpack-core" {
  declare const codeList: Array<{
    countryName: string;
    alpha2: string;
    alpha3: string;
    numeric: number;
  }>;
  declare function isoToCountryCode(isoCode: string, keyToGet?: string): string;
  export function imageUrl(assetCode: string, size: string): string;
}
