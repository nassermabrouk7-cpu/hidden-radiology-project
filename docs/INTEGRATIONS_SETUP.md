# Hidden Radiology - Integrations Setup Guide

## Overview
This document provides comprehensive setup instructions for all integrations including Gumroad webhooks, social media automation, and UTM tracking.

## Environment Variables

### Required for Gumroad Integration
```env
# Gumroad Configuration
GUMROAD_API_KEY=your_gumroad_api_key_here
WEBHOOK_SECRET=your_webhook_secret_for_signature_verification
```

### Required for Social Media Automation
```env
# Social Media API Keys
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
TWITTER_BEARER_TOKEN=your_twitter_bearer_token

FACEBOOK_PAGE_ID=your_facebook_page_id
FACEBOOK_ACCESS_TOKEN=your_facebook_page_access_token

LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_ACCESS_TOKEN=your_linkedin_access_token

TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

# Automation Settings
ENABLE_SOCIAL_AUTOMATION=true
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Optional for UTM Tracking
```env
# Analytics (optional)
GOOGLE_ANALYTICS_ID=your_ga4_id
```

## Gumroad Webhook Setup

### 1. Configure Gumroad Webhook
1. Log in to your Gumroad account
2. Go to Products → Select a product → Settings → Webhooks
3. Add webhook URL: `https://your-domain.com/api/gumroad-webhook`
4. Set webhook secret (use the same value as `WEBHOOK_SECRET` env var)
5. Select events: `sale`, `refund`, `dispute`

### 2. Webhook Payload Structure
The webhook expects the following structure:
```json
{
  "product_name": "Product Name",
  "product_permalink": "product-permalink",
  "email": "customer@example.com",
  "purchase_id": "unique_purchase_id",
  "sale_count": 10
}
```

### 3. Security
- Webhook signature verification is implemented using `WEBHOOK_SECRET`
- Always use HTTPS in production
- Never commit secrets to version control

## Social Media Automation

### Supported Platforms
- **X/Twitter**: Automated posting with media support
- **Facebook**: Page posts with link previews
- **LinkedIn**: Professional network posts
- **Telegram**: Channel and group messages

### Trigger Events
1. **New Book Release**: Automatic announcement when new products are published
2. **Sales Milestones**: Celebratory posts at 10, 25, 50, 100, 250, 500, 1000 sales
3. **Manual Trigger**: On-demand posting via API

### API Endpoint
```
POST /api/social-automation
```

### Request Format
```json
{
  "trigger": {
    "type": "new_release" | "sales_milestone" | "manual",
    "productId": "cxr-vol1-ar",
    "productName": "أنا فاهم | أشعة الصدر - الجزء 1",
    "milestone": 100,
    "locale": "ar"
  },
  "platforms": ["twitter", "facebook", "linkedin", "telegram"]
}
```

### Platform-Specific Setup

#### Twitter/X
1. Create Twitter Developer account
2. Create new app in Twitter Developer Portal
3. Enable OAuth 1.0a and OAuth 2.0
4. Generate API keys and access tokens
5. Set webhook environment variables

#### Facebook
1. Create Facebook Page for your brand
2. Create Facebook App
3. Add Page Access Token with `pages_manage_posts` permission
4. Set `FACEBOOK_PAGE_ID` and `FACEBOOK_ACCESS_TOKEN`

#### LinkedIn
1. Create LinkedIn Application
2. Enable OAuth 2.0
3. Request `w_member_social` permission
4. Generate access token
5. Set LinkedIn environment variables

#### Telegram
1. Create Telegram bot via @BotFather
2. Get bot token
3. Add bot to your channel/group as admin
4. Get chat ID (use @userinfobot)
5. Set Telegram environment variables

## UTM Link Generator

### API Endpoint
```
POST /api/utm-generator
```

### Usage Examples

#### Basic UTM Generation
```json
{
  "url": "https://hiddenradiology.com/ar/products/ana-fahim-cxr",
  "source": "twitter",
  "medium": "social",
  "campaign": "book_launch",
  "content": "chest_xray_promo"
}
```

#### Using Predefined Templates
```json
{
  "url": "https://hiddenradiology.com/ar/products/ana-fahim-cxr",
  "template": "ana_fahem_series",
  "content": "twitter_post_1"
}
```

#### Available Templates
- `ana_fahem_series`: For Ana Fahem book series promotions
- `book_launch`: For new product launches
- `social_media`: For organic social media posts
- `paid_ads`: For paid advertising campaigns

### Quick GET Generation
```
GET /api/utm-generator?url=https://example.com&source=email&medium=newsletter&campaign=summer_sale
```

## Integration Testing

### Test Webhook Locally
```bash
# Using ngrok for local testing
ngrok http 3000

# Update Gumroad webhook to use ngrok URL
# Test with curl
curl -X POST https://your-ngrok-url/api/gumroad-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "product_name": "Test Product",
    "product_permalink": "test-product",
    "email": "test@example.com",
    "purchase_id": "test_123"
  }'
```

### Test Social Automation
```bash
curl -X POST http://localhost:3000/api/social-automation \
  -H "Content-Type: application/json" \
  -H "x-webhook-signature: your_webhook_secret" \
  -d '{
    "trigger": {
      "type": "manual",
      "productId": "cxr-vol1-ar",
      "productName": "Test Product",
      "locale": "ar"
    },
    "platforms": ["twitter"]
  }'
```

### Test UTM Generator
```bash
curl -X POST http://localhost:3000/api/utm-generator \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://hiddenradiology.com/ar/products/ana-fahim-cxr",
    "template": "ana_fahem_series",
    "content": "test_promo"
  }'
```

## Deployment Configuration

### Vercel Environment Variables
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all required environment variables
3. Select appropriate environments (Production, Preview, Development)
4. Redeploy to apply changes

### GitLab CI/CD Variables
1. Go to GitLab Project → Settings → CI/CD → Variables
2. Add protected and masked variables for secrets
3. Ensure variables are available in pipeline jobs

## Security Best Practices

1. **Never commit secrets**: Use `.gitignore` for `.env` files
2. **Use different secrets per environment**: Dev/Staging/Production
3. **Rotate secrets regularly**: Update API keys periodically
4. **Monitor webhook logs**: Check for failed deliveries
5. **Rate limiting**: Implement rate limits for social media APIs
6. **Input validation**: Always validate webhook payloads

## Troubleshooting

### Common Issues

#### Webhook Not Receiving Data
- Check Gumroad webhook URL is correct
- Verify webhook secret matches
- Check server logs for errors
- Ensure HTTPS is used in production

#### Social Media API Errors
- Verify API tokens are valid and not expired
- Check platform-specific rate limits
- Ensure required permissions are granted
- Review API error messages in logs

#### Build/Deployment Issues
- Verify all environment variables are set
- Check Next.js build logs for errors
- Ensure dependencies are up to date
- Validate TypeScript types

## Monitoring and Analytics

### Key Metrics to Track
- Webhook success/failure rates
- Social media post engagement
- UTM link click-through rates
- Conversion rates by campaign
- Platform-specific performance

### Logging
All integration events are logged to console. In production, consider:
- Structured logging with Winston or Pino
- Log aggregation with Datadog, Sentry, or similar
- Alerting for failed webhooks or API calls

## Support

For integration issues:
1. Check this documentation first
2. Review server logs
3. Test endpoints locally
4. Contact development team if issues persist

## Changelog

### v1.0.0 (2026-09-08)
- Initial Gumroad webhook integration
- Social media automation framework
- UTM link generator API
- Multi-platform support (Twitter, Facebook, LinkedIn, Telegram)
- Sales milestone triggers
- Comprehensive documentation