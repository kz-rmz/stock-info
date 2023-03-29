export default interface ICompany {
  address?: string | null;
  address2?: string | null;
  ceo?: string | null;
  city?: string | null;
  companyName?: string | null;
  country?: string | null;
  date?: string | null;
  employees?: number | null;
  exchange?: string | null;
  exchangeCode?: string | null;
  industry?: string | null;
  issuetype?: string | null;
  longDescription?: string | null;
  marketcap?: string | null;
  phone?: number | null;
  primarySicCode?: number | null;
  sector?: string | null;
  securityName?: string | null;
  securityType?: string | null;
  shortDescription?: string | null;
  state?: string | null;
  symbol?: string | null;
  website?: string | null;
  zip?: string | null;
  // id: string,
  key: string;
  // subkey: string,
  // updated: number
}
