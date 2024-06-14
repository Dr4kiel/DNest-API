# DNEST API
Ce projet est une API permettant de récupérer les informations envoyées par un DNest \(Pour rappel, le DNest est un appareil permettant la mesure de paramètres atmosphérique tel que la température ou la pression\).

## Usage
L'API permet de récupérer les données collectées par votre DNest. Vous trouverez ci-dessous, une liste des requêtes.

### Requêtes Publiques

| Type | Chemin | Paramètres |
| ---- | ------ | ---------- |
| GET | /api/records/:device_id | / |
| POST | /api/records/register | device_id, timestamp, temperature, pressure |

**device_id** : L'identifiant unique du DNest

**timestamp** : Le timestamp à laquelle la mesure à été prise

**temperature** : La température enregistrée lors de la mesure

**pressure** : La pression enregistrée lors de la mesure

---

### Requêtes Privées
| Type | Chemin | Paramètres |
| ---- | ------ | ---------- |
| POST | /api/device/ | admin_key |
| POST | /api/device/create | admin_key, device_id |
| POST | /api/device/delete | admin_key, device_id |

**admin_key** : La clé administrateur

**device_id** : L'identifiant unique du DNest
