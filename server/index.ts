import * as express from 'express';
import * as next from 'next';
import * as compression from 'compression';
import { makeCMSContentRequest } from '../services/CMSrequest';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = dev ? 3000 : process.env.PORT;

app.prepare().then(async () => {
  const server = express();
  server.use(compression());

  // server.get('/recipe/:slug', async (req, res) => {
  //   const recipe = await getRecipeFromSlug(req.params.slug) as any;
  //   if (recipe) {
  //     app.render(req, res, '/recipe', {recipe})
  //   }
  // });

  server.get('/:slug', async(req,res)=>{
    const allPosts = await makeCMSContentRequest('blogPost');
    // const postURLs = allPosts.map((post:any) => post.fields.postTitle.replace(/\s+/g, '-').toLowerCase());
    // const doesExist = !!postURLs.find((postURL:string)=>postURL===req.params.slug);
    const post = allPosts.find((post:any)=>post.fields.postTitle.replace(/\s+/g, '-').toLowerCase()===req.params.slug);

    if(!!post){
      app.render(req, res, '/post',{post})
      return
    }
    return handle(req,res)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err? : express.Errback) => {
    if (err) throw err;
    if (dev) console.log(`> Ready on http://localhost:${PORT}`);
    else console.log(`Ready on ${PORT}`)
  })
})
.catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})