<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/rss">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="channel/title"/></title>
        <link rel="stylesheet" href="/rss.css"/>
      </head>
      <body>
        <div class="rss">
          <div class="rss-channel-title"><xsl:value-of select="channel/title"/></div>
          <div class="rss-channel-link"><a href="{channel/link}"><xsl:value-of select="channel/link"/></a></div>
          <div class="rss-channel-description"><xsl:value-of select="channel/description"/></div>
          <div class="rss-channel-language"><xsl:value-of select="channel/language"/></div>
          <h1 class="rss-title">what is an rss?</h1>
          <p>a Really Simple Syndication feed, or RSS feed, is a kind of feed you can subscribe to get updates from using an RSS agregating program or app. this allows webmasters to let you know of new things on their site without you having to get on here regularly to look for the updates yourself! for example, this feed i use to let you know of new blogs i write!</p>
          <xsl:for-each select="channel/item">
            <div class="rss-item">
              <div class="rss-item-title"><xsl:value-of select="title"/></div>
              <xsl:if test="link">
                <div class="rss-item-link"><a href="{link}"><xsl:value-of select="link"/></a></div>
              </xsl:if>
              <div class="rss-item-pubDate"><xsl:value-of select="pubDate"/></div>
              <div class="rss-item-description"><xsl:value-of select="description"/></div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
