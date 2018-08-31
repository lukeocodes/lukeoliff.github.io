webpackJsonp([0x5d2bfbde5f8a],{602:function(e,t){e.exports={data:{post:{id:"/home/travis/build/lukeoliff/gatsby-homepage/content/posts/2018-02-07--oauth2-the-complete-guide/index.md absPath of file >>> MarkdownRemark",html:'<p><strong>This post is original content developed by me for the <a href="https://auth0.com/blog">Auth0’s blog</a> and has been re-posted here as part of an online portfolio with permission. Relevant attribution and canonical links exist. <a href="https://auth0.com/blog/oauth2-the-complete-guide/">Click here to see the original</a>.</strong></p>\n<p>Have you visited a site recently, where you are given the option of connecting or signing up using Google, Facebook or Twitter? Sure you have! This is basically what OAuth is all about; granting third-party services permission to do something for you–like logging you in. In this article, you will learn what OAuth is, how it started, and how it works. </p>\n<blockquote>\n<p><strong>Note:</strong> For the purposes of this article and the comfort of the target audience, OAuth is to be assumed as OAuth 2.0 unless specifically mentioning another version.</p>\n</blockquote>\n<h2>So what is OAuth?</h2>\n<p>OAuth (or Open Authorization) is a framework that gives users the ability to grant access to their information stored in one place, from another place. For example, granting Spotify access to your Facebook profile.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/spotify-signup-with-facebook-a23e46329bed98089e635349ca7ada9b-d8af2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 511px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 105.87084148727985%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsSAAALEgHS3X78AAACWElEQVQ4y51SW2sTURDOzxIkvokUi5Ja2igoQsEmrVh9LF7wqfjoJQURG9O0Yq1CfWx8KZUqxlhSMDVkk5j7bq67OWv2fs7G2d12s2lMLQ6zX/ZM5tuZ8824ug7TdR2w2Wx+jEQEQbAjw8w1SH60sHBhdHQxEPiwsRHZ3FxdWVkOhSiKGvxWH5kQAgip50dGtra2vkWjn7a3v8din3d28oXCX8hwBg4mgAcOBj0PNmwnYGxQIMFlJWFCFBWrGpZVTRAVRSWAHUEWRBnQeJEgqEECpGGzQYMMP3s/yx5/cMwf9PiWvLfDsw/fT82/uXH37fT99an5Nd+9df+Dd+CTc8se/9Kl2eDF6Ze7idLBnb/G825v4MzlRffks3PXX1y983p8JjQ2E5q4Gfb4XnlvhSFyZW717LXnpyeeuL1PT40//rKb6wnWYlGpUqWZRpapUHQxU62Ap5gSYL7MpOlyminnajTqSOg33EXpqY0x1jRNVRUQzhCmS/SuKYQhDbaGaD66PVFiKuU6PBsIIhdyBZbl6vU6XaErZXjoKhhTLRaKDM1IkmSRdSfZ+jaP+Fg0lsn8oqh0MpmkUqlsNru/n0xnMvH4XuJHAiHeOW2XtRuyLKuqevwy2jWtXeiRWZbleR5C2JiisQO2GYFDNGndPvKRgsSxbcO8r3K73W40GlybAyMna75XWVEUSYKLy6CnubonrgwnUMvYXQ3/T9ss26rVagghu6tjlD/atuOPnpPh5qyss1yL41hwxCMQj2u3kTm5f1cGsiiKgiB2OgDwYpgoSfoQs+/8B05Gi2/pslIUAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Spotify uses OAuth for signup with Facebook"\n        title=""\n        src="/static/spotify-signup-with-facebook-a23e46329bed98089e635349ca7ada9b-d8af2.png"\n        srcset="/static/spotify-signup-with-facebook-a23e46329bed98089e635349ca7ada9b-cac10.png 200w,\n/static/spotify-signup-with-facebook-a23e46329bed98089e635349ca7ada9b-2419b.png 400w,\n/static/spotify-signup-with-facebook-a23e46329bed98089e635349ca7ada9b-d8af2.png 511w"\n        sizes="(max-width: 511px) 100vw, 511px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The idea is that you’re giving Spotify certain permission to access your Facebook details, so that Facebook can provide Spotify with enough information to sign you up, enhance your profile details, or display what your friends are listening to. Meanwhile, more sensitive information, such as your conversations, remain entirely closed off to Spotify. They only get access to the bits they’re <em>authorized</em> to see.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/spotify-access-to-facebook-28f64ea328e8366ab413c1c4d63bd94b-f5af0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 514px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 85.60311284046692%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsSAAALEgHS3X78AAABXklEQVQ4y62Sv04CQRDGeRAbE9/BwkYrbUx8AwsT4wuYmGBBYcIbWNpZGCgsTEw0Go1BCxoQtdEAAipw596/heNu9/ZzDohBInioc1823+3M5HeTuRj+ELExuRS72G0cekqQV/REae7Vvfj6aim58hS/4Q/0KlUwGXlPO06+7vPAnYD8+5mVCgmaphUKd+XK81uzUalWDcPopqKRda1ZLpdItVq1WCzW640giDBzx4fVgsGV1QbJdJTdhu3SDVru6ObeV3FXGU5gtsiAd+C4ocjTTdvr7WIE2Re4vMdJDue3OM0NKI+zfGgYx+DwsUEsczC3hak1zG5ieQdLCczHsZjAwjam1zGzgexjWPY5/heyJ3CUxcEV0hmkr/tKZfonSbO+I//PnmUwTkOrHkmmv8VxHMaYlDIyWUrP8/xueJ0wyAhf0KUQ4odmzjlj76bBTCsMIpsmWVvXdUoNFX8Axr/RZcFM9iAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="OAuth used by Spotify for access to Facebook"\n        title=""\n        src="/static/spotify-access-to-facebook-28f64ea328e8366ab413c1c4d63bd94b-f5af0.png"\n        srcset="/static/spotify-access-to-facebook-28f64ea328e8366ab413c1c4d63bd94b-f77db.png 200w,\n/static/spotify-access-to-facebook-28f64ea328e8366ab413c1c4d63bd94b-4245a.png 400w,\n/static/spotify-access-to-facebook-28f64ea328e8366ab413c1c4d63bd94b-f5af0.png 514w"\n        sizes="(max-width: 514px) 100vw, 514px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p><em>“Many luxury cars today come with a valet key. It is a special key you give the parking attendant and unlike your regular key, will not allow the car to drive more than a mile or two. You give someone limited access to your car with a special key, while using your regular key to unlock everything.”</em> — OAuth.net</p>\n</blockquote>\n<h2>How did OAuth start?</h2>\n<p>Before initiatives like OAuth appeared, you would have had to give Spotify access to your Facebook login details for Spotify to be able to access your information on Facebook.</p>\n<p>OAuth was first developed in 2007 by a group seeking to standardize how we can delegate permissions between different software applications. The latest version, OAuth 2.0, is not backwards compatible with previous versions which have now been deprecated. Despite deprecating old versions, they remain in use widely across the web, including by one of the original drivers behind the general OAuth movement, Twitter. Some feel that it is less secure and it has been described as a <a href="http://hueniverse.com/2012/07/26/oauth-2-0-and-the-road-to-hell/">road to hell</a>.</p>\n<h2>How does OAuth work?</h2>\n<p>To understand how OAuth works, we need to understand Roles, grant types, access tokens, and refresh tokens.</p>\n<h3>Roles</h3>\n<p>First we need to understand how it separates the responsibility of our requests. Roles are used to define the separate entities involved in a request.</p>\n<h4>The Client</h4>\n<p>The client is the application trying to access the user’s account. It needs Authorization to do so. This might be the website you’re on, the app you’ve installed to your phone, or both. In our example, this would be Spotify.</p>\n<h4>The Resource Server</h4>\n<p>The resource server is the place storing the user’s information. In our example, this would be Facebook.</p>\n<h4>The Authorization Server</h4>\n<p>This is the server that asks the user to approve or deny the request. This would also be Facebook, but a separate service that Facebook operate with the purpose of handling authorization.</p>\n<h4>The Resource Owner</h4>\n<p>The resource owner is the person who is giving access to their data. So if you’re giving Spotify permission to access your Facebook info, you’re the resource owner.</p>\n<h3>Grant types</h3>\n<p>A grant represents the user’s permission to access their data and can be used to acquire an access token. The OAuth Specification describes four flows for acquiring an access token. These flows are called grant types. Which one is more suitable for you will most likely depend on the type of client.</p>\n<p><strong><a href="https://auth0.com/docs/api-auth/grant/authorization-code">Authorization Code</a>:</strong> used by Web Apps executing on a server. This is also used by mobile apps, using the <a href="https://auth0.com/docs/api-auth/grant/authorization-code-pkce">Proof Key for Code Exchange (PKCE) technique</a>.</p>\n<p><strong><a href="https://auth0.com/docs/api-auth/grant/implicit">Implicit</a>:</strong> used by JavaScript-centric apps (Single Page Applications) executing on the user’s browser.</p>\n<p><strong><a href="https://auth0.com/docs/api-auth/grant/password">Resource Owner Password Credentials</a>:</strong> used by trusted apps.</p>\n<p><strong><a href="https://auth0.com/docs/api-auth/grant/client-credentials">Client Credentials</a>:</strong> used for machine to machine communication, such as API auth.</p>\n<p>This article will only touch on the most common form of grant type which is going to help us shed light on OAuth, without overcomplicating it. <a href="https://auth0.com/docs/protocols/oauth2">Read more about OAuth 2.0 and the other grant types</a>.</p>\n<h4>Authorization code grant</h4>\n<p>An authorization code grant is what we’d encounter in our example.</p>\n<p><strong>The Client</strong> will redirect the user to the <strong>The Authorization Server</strong> with some information about what they’re requesting and where they’re requesting it from, among other things. </p>\n<p>The user will be asked to login to <strong>The Authorization Server</strong> and approve <strong>The Client</strong>, receiving an authorization code. </p>\n<p><strong>The Client</strong> can now send that code and our grant type to <strong>The Authorization Server</strong> and receive back an access token. </p>\n<h3>Access tokens</h3>\n<p>Access tokens represent your authorization to access <strong>The Resource Owner</strong>’s information on <strong>The Resource Server</strong>. You’re required to exchange your grant for an access token, which will have an expiry time.</p>\n<p>Access tokens expire so that any malicious use and damage is limited. You’ll need a new access token once it has expired. They can be setup to expire after any amount of time, usually a few minutes.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-7c52b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.18964003511853%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0ElEQVQoz32SUROCIBCE/f//U19wKkQLSqqv2wkwnfbBWTj2bm+rizHedog7HL7pxO4NrlvoAYTSwwCpYg6vBrzz3o/j2Pf9MAzOuWmauFzXlXu4uiCs4qcBojk0/pmcUhIXOZ6sJcsWyaBGZf9lWTbieZ45a3IIAYfOAKEk22pU1q5iajln7YwYwckA4SjnZwM3cv7PNt/0Bc/UWtDyx2kTKdPwTObBoHYXA7ymTWNyzgYIYoyhl0mUypy9FKGW/4jLT9L+K2S1TVs7q1qSfwPR336AwoN/8AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Generic OAuth flow"\n        title=""\n        src="/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-48538.png"\n        srcset="/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-bed0f.png 200w,\n/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-5fd34.png 400w,\n/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-48538.png 800w,\n/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-b70ec.png 1200w,\n/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-d134a.png 1600w,\n/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-f6ead.png 2400w,\n/static/basic-oauth2-flow-bc1ff15f5c1a10eaa8a0e680e0e44889-7c52b.png 4556w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Refresh tokens</h3>\n<p>Refresh tokens are a special type of token that can be held <strong>securely</strong> by <strong>The Client</strong> with the express purpose of being able to request a new access token from <strong>The Authorization Server</strong> once the original access token has expired. These can also expire, but are generally long lived with expiry times that can be as long as 14 days or more.</p>\n<p><strong>The Authorization Server</strong> should be able to revoke a refresh token in the event that it could have been compromised.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-7c52b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.18964003511853%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0klEQVQoz3WSbQ+CMAyE+f//E2IC4saLbsrUx16yTcH7dC133bWhCSHcdgg7HGoasXuFq4FmJuJ8ehggxUzxqoDOez8MQ9u2XddBpmmiuW0bfbimYCzmpwGSU9UJMccYVYocvyxpHZvOuq7wvD/ll3lZFmrFds71fX8yQEir2NGQ1y5mvqWUFNsbsLEwg9hTQS4GnlHyg9h0UOM5GyCoyamLZM1fs9Q4x3GEUErmDGxXrk0GpiYDhHio9TiY51nXYi/9CFr+Y9Zta2jcD+rji2B8A592fWAhrOBJAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Refresh OAuth flow"\n        title=""\n        src="/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-48538.png"\n        srcset="/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-bed0f.png 200w,\n/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-5fd34.png 400w,\n/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-48538.png 800w,\n/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-b70ec.png 1200w,\n/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-d134a.png 1600w,\n/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-f6ead.png 2400w,\n/static/refresh-oauth2-flow-431b1ced96d6aa54d30866cee0dad99f-7c52b.png 4556w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>OAuth at Auth0</h2>\n<p>Auth0 is a global leader in Identity-as-a-Service (IDaaS) and provides thousands of customers in every market sector with the only identity solution they need for their web, mobile, IoT, and internal applications.</p>\n<p>At Auth0 we utilize OAuth 2.0 along with Open ID Connect (OIDC) which is an identity layer built upon OAuth 2.0. OAuth is not the only authorization protocol we use, but it is one of the most popular.</p>\n<p>For more information, visit <a href="https://auth0.com">https://auth0.com</a>, <a href="https://auth0.com/signup">sign up for a free Auth0 account here</a> or follow @auth0 on Twitter.</p>',fields:{slug:"/oauth2-the-complete-guide/",prefix:"2018-02-07"},frontmatter:{link:{rel:"canonical",href:"https://auth0.com/blog/oauth2-the-complete-guide/"},description:"Describing OAuth 2.0 for the masses, demystifying the technology behind this common authorization technique",title:"OAuth 2.0: The Complete Guide",author:"luke oliff",category:"portfolio",cover:{childImageSharp:{resize:{src:"/static/logo-35366a8b1975e8324c3013bfda87ab29-160fa.png"}}}}},authornote:{id:"/home/travis/build/lukeoliff/gatsby-homepage/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/oauth2-the-complete-guide/",next:{id:"/home/travis/build/lukeoliff/gatsby-homepage/content/posts/2018-06-20--helloworld-with-auth0/index.md absPath of file >>> MarkdownRemark",fields:{slug:"/helloworld-with-auth0/",prefix:"2018-06-20"},frontmatter:{title:"HelloWorld: With Auth0",category:"portfolio"}}}}}});
//# sourceMappingURL=path---oauth-2-the-complete-guide-9cf56a78e8c0254d93dd.js.map