# Polish Language Extension

**PL** Polska paczka językowa Flarum. Zawiera:

- Wszystkie tłumaczenia forum,
- Tłumaczenia panelu administratora (ACP),
- Tłumaczenia wszystkich domyślnych rozszerzeń dostarczanych wraz z instalacją Flarum.

**EN** Polish language pack for Flarum. Contains:

- All forum translations,
- Admin control panel (ACP) translations,
- Translations of all default extensions provided with Flarum installation.


### Instalacja

```bash
composer require flarumeu/flarum-polski
```

### Aktualizowanie

```bash
composer update flarumeu/flarum-polski
php flarum migrate
php flarum cache:clear
```

### Włączenie

Aby włączyć, wystarczy udać się do panelu administratora, po lewej kliknąć zakładkę "Extensions" i odnaleźć wśród innych rozszerzeń "Język Polski", po czym go zaznaczyć.

Teraz czyścimy cache przeglądarki i gotowe! Możemy wybrać język polski z listy w prawym górnym rogu forum...

...albo ustawiamy język polski jako domyślny dla naszego forum:
Wchodzimy w "Podstawy", później znajdujemy "Domyślny język", wybieramy z listy "Język polski" i zatwierdzamy.

