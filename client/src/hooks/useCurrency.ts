import { useState, useEffect } from 'react';

// European country codes (EU + other European countries)
const EUROPE_COUNTRIES = new Set([
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT',
  'LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE',
  // Non-EU European countries
  'CH','NO','IS','GB','AL','BA','ME','MK','RS','MD','UA','BY','GE','AM','AZ',
  'TR','LI','MC','SM','VA','AD',
]);

export type Currency = 'MXN' | 'EUR' | 'USD';

export interface PriceSet {
  full: string;       // e.g. "$3,999 MXN"
  beca: string;       // e.g. "desde $1,999 MXN"
  currency: Currency;
}

const PRICES: Record<Currency, { full: string; beca: string }> = {
  MXN: { full: '$3,999 MXN', beca: 'desde $1,999 MXN' },
  EUR: { full: '€232 EUR',   beca: 'desde €116 EUR'   },
  USD: { full: '$232 USD',   beca: 'desde $116 USD'   },
};

export function useCurrency(): { prices: PriceSet; loading: boolean } {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check sessionStorage cache first to avoid repeated API calls
    const cached = sessionStorage.getItem('ks_currency');
    if (cached && (cached === 'MXN' || cached === 'EUR' || cached === 'USD')) {
      setCurrency(cached as Currency);
      setLoading(false);
      return;
    }

    fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) })
      .then(r => r.json())
      .then(data => {
        const country: string = data?.country_code ?? '';
        let detected: Currency = 'USD';
        if (country === 'MX') detected = 'MXN';
        else if (EUROPE_COUNTRIES.has(country)) detected = 'EUR';
        sessionStorage.setItem('ks_currency', detected);
        setCurrency(detected);
      })
      .catch(() => {
        // Fallback to USD on any error
        setCurrency('USD');
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    prices: { ...PRICES[currency], currency },
    loading,
  };
}
