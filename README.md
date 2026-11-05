# EML Quant Trading Competition — Application Form

Static HTML/CSS/JavaScript application, styled after the supplied AES form. No build step or dependencies.

## Local preview

From this folder, run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 . You can inspect all fields, required-field validation, responsiveness, and presentation-date choices. **Local submissions are intentionally blocked** because Netlify Forms cannot record submissions on a local server. The form displays an explanatory message instead of pretending to save a submission.

## Deploy to Netlify

Upload the **contents of this folder** (or drag this folder to Netlify's manual deployment interface). The form includes `data-netlify="true"`, a `form-name` hidden field, and a honeypot field so Netlify can detect it during deployment.

After deployment, check **Netlify → Forms** for `eml-quant-trading-application`, and make one test submission on the deployed site. The successful submission redirects to `/success.html`. Check that the submission appears in the Netlify dashboard. Netlify's form handling and any submission limits depend on your site/account configuration.

## Files

- `index.html`: form content and Netlify form markup
- `styles.css`: responsive styling
- `script.js`: local preview guard and submit-button state
- `success.html`: post-submission confirmation

All fields are required. The two finalist dates have independent Yes/No responses. No real-money trading is involved in the competition.
