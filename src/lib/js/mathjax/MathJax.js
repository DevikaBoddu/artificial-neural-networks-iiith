/*************************************************************
 *
 *  MathJax.js
 *  
 *  The main code for the MathJax math-typesetting library.  See 
 *  http://www.mathjax.org/ for details.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2010 Design Science, Inc.
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

if (!window.MathJax) {window.MathJax = {}}

MathJax.isPacked = true;

if(document.getElementById&&document.childNodes&&document.createElement)
{
  if(!window.MathJax)
  {
    window.MathJax={}
  }
  if(!MathJax.Hub)
  {
    MathJax.version="1.1a";
    MathJax.fileversion="1.1.7";
    (function(d)
     {
      var b=window[d];
      if(!b)
      {
        b=window[d]={}
      }
      var f=[];
      var c=function(g)
      {
        var h=g.constructor;
        if(!h)
        {
          h=new Function("")
        }
        for(var i in g){
          if(i!=="constructor"&&g.hasOwnProperty(i))
          {
            h[i]=g[i]}
          }
        return h
      }
      var a=function()
      {
        return new Function("return arguments.callee.Init.call(this,arguments)")
      }
      var e=a();
      e.prototype={BugTest:1};
      if(!e.prototype.BugTest)
      {
        a=function()
        {
          return function()
          {
            return arguments.callee.Init.call(this,arguments)
          }
        }
      }
      b.Object=c({constructor:a(),Subclass:function(g,i){
         var h=a();
        h.SUPER=this;
        h.Init=this.Init;
        h.Subclass=this.Subclass;
        h.Augment=this.Augment;
        h.protoFunction=this.protoFunction;
        h.can=this.can;h.has=this.has;
        h.isa=this.isa;
        h.prototype=new this(f);
        h.prototype.constructor=h;
        h.Augment(g,i);
        return h
      }, 
       Init:function(g){
         var h=this;
         if(g.length===1&&g[0]===f){
           return h
         }
         if(!(h instanceof g.callee)){
           h=new g.callee(f)
         }
         return h.Init.apply(h,g)||h
       },
        Augment:function(g,h)
        {
          var i;if(g!=null)
          {
            for(i in g){
              if(g.hasOwnProperty(i))
              {
                this.protoFunction(i,g[i])
              }
            }
            if(g.toString!==this.prototype.toString&&g.toString!=={}.toString)
            {
              this.protoFunction("toString",g.toString)}}if(h!=null)
              {
                for(i in h)
                {
                  if(h.hasOwnProperty(i))
                  {
                    this[i]=h[i]
                  }
                }
              }
          return this
        },
          protoFunction:function(h,g)
          {
            this.prototype[h]=g;
            if(typeof g==="function")
            {
              g.SUPER=this.SUPER.prototype
            }
          },
          prototype:
                  {
                    Init:function(){},SUPER:function(g)
                    {
                      return g.callee.SUPER},
                    can:function(g)
                      {
                        return typeof(this[g])==="function"
                      },
                    has:function(g)
                    {
                      return typeof(this[g])!=="undefined"
                    },
                    isa:function(g)
                    {
                      return(g instanceof Object)&&(this instanceof g)
                    }
                  },
                  can:function(g)
                  {
                    return this.prototype.can.call(this,g)
                  },
                  has:function(g)
                  {
                    return this.prototype.has.call(this,g)
                  },
                  isa:function(h)
                  {
                    var g=this;
                    while(g){
                      if(g===h)
                      {
                         return true
                      }
                      else
                      {
                        g=g.SUPER
                      }
                    }
                    return false
                  },
                  SimpleSUPER:c({constructor:function(g){return this.SimpleSUPER.define(g)},
                                 define:function(g){
                                   var i={};
                                   if(g!=null)
                                   {
                                     for(var h in g)
                                     {
                                       if(g.hasOwnProperty(h)){
                                         this.protoFunction(h,g[h])
                                       }
                                     }
                                     if(g.toString!==this.prototype.toString&&g.toString!=={}.toString)
                                     {
                                       this.protoFunction("toString",g.toString)
                                     }
                                   }
                                   return i
                                 },
                                 wrap:function(i,h)
                                 {
                                   if(typeof(h)==="function"&&h.toString().match(/\.\s*SUPER\s*\(/))
                                   {
                                     var g=new Function(this.wrapper);
                                     g.label=i;
                                     g.original=h;
                                     h=g;
                                     g.toString=this.stringify
                                   }
                                   return h
                                 },
                                 wrapper:function()
                                 {
                                   var h=arguments.callee;
                                   this.SUPER=h.SUPER[h.label];
                                   try
                                   {
                                     var g=h.original.apply(this,arguments)
                                   }
                                   catch(i)
                                   {
                                     delete this.SUPER;
                                     throw i
                                   }
                                   delete this.SUPER;
                                   return g
                                 }.toString().replace(/^\s*function \(\)\s*\{\s*/i,"").replace(/\s*\}\s*$/i,""),
                                 toString:function()
                                 {
                                   return this.original.toString.apply(this.original,arguments)
                                 }
                                })})})
                ("MathJax");
    (function(BASENAME)
     {
      var BASE=window[BASENAME];
      if(!BASE)
      {
        BASE=window[BASENAME]={}
      }
      var CALLBACK=function(data)
      {
        var cb=new Function("return arguments.callee.execute.apply(arguments.callee,arguments)");
        for(var id in CALLBACK.prototype)
        {
          if(CALLBACK.prototype.hasOwnProperty(id))
          {
            if(typeof(data[id])!=="undefined")
            {
              cb[id]=data[id]
            }
            else
            {
              cb[id]=CALLBACK.prototype[id]
            }
          }
        }
        cb.toString=CALLBACK.prototype.toString;
        return cb
      }
      CALLBACK.prototype={isCallback:true,hook:function(){},data:[],object:window,execute:function()
      {
        if(!this.called||this.autoReset)
        {
          this.called=!this.autoReset;
          return this.hook.apply(this.object,this.data.concat([].slice.call(arguments,0)))
        }
      },
      reset:function()
      {
        delete this.called
      },
       toString:function()
        {
          return this.hook.toString.apply(this.hook,arguments)
        }
        };
      var ISCALLBACK=function(f)
      {
        return(typeof(f)==="function"&&f.isCallback)
      }
      var EVAL=function(code)
      {
        return eval.call(window,code)
      };
      EVAL("var __TeSt_VaR__ = 1");
      if(window.__TeSt_VaR__)
      {
        try
        {
          delete window.__TeSt_VaR__
        }
        catch(error)
        {
          window.__TeSt_VaR__=null
        }
      }
      else
      {
        if(window.execScript) 
        {
          EVAL=function(code)
          {
            BASE.__code=code;
            code="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} 
            catch(err) 
            {"+BASENAME+".__result = err}";
            window.execScript(code);
            var result=BASE.__result;
            delete BASE.__result;
            delete BASE.__code;
            if(result instanceof Error)
            {
              throw result
            }
            return result
          }
        }
        else
        {
          EVAL=function(code)
          {
            BASE.__code=code;
            code="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} 
            catch(err) 
            {"+BASENAME+".__result = err}";
            var head=(document.getElementsByTagName("head"))[0];
            if(!head){head=document.body}var script=document.createElement("script");
            script.appendChild(document.createTextNode(code));
            head.appendChild(script);
            head.removeChild(script);
            var result=BASE.__result;
            delete BASE.__result;
            delete BASE.__code;
            if(result instanceof Error)
            {
              throw result
            }
            return result
          }
        }
      }
      var USING=function(args,i)
      {
        if(arguments.length>1)
        {
          if(arguments.length===2&&!(typeof arguments[0]==="function")&&arguments[0] instanceof Object&&typeof arguments[1]==="number")
          {
            args=[].slice.call(args,i)
          }
          else
          {
            args=[].slice.call(arguments,0)
          }
        }
        if(args instanceof Array&&args.length===1)
        {
          args=args[0]
        }
        if(typeof args==="function")
        {
          if(args.execute===CALLBACK.prototype.execute)
          {
            return args
          }
          return CALLBACK({hook:args})
        }
        else
        {
          if(args instanceof Array)
          {
            if(typeof(args[0])==="string"&&args[1] instanceof Object&&typeof args[1][args[0]]==="function")
            {
              return CALLBACK({hook:args[1][args[0]],object:args[1],data:args.slice(2)})
            }
            else
            {
              if(typeof args[0]==="function")
              {
                return CALLBACK({hook:args[0],data:args.slice(1)})
              }
              else
              {
                if(typeof args[1]==="function")
                {
                  return CALLBACK({hook:args[1],object:args[0],data:args.slice(2)})}}}
          }
          else
          {
            if(typeof(args)==="string")
            {
              return CALLBACK({hook:EVAL,data:[args]})
            }
            else
            {
              if(args instanceof Object)
              {
                return CALLBACK(args)
              }
              else
              {
                if(typeof(args)==="undefined")
                {
                  return CALLBACK({})
                }
              }
            }
          }
        }
        throw Error("Can't make callback from given data")};
      var DELAY=function(time,callback)
      {
        callback=USING(callback);
        callback.timeout=setTimeout(callback,time);
        return callback
      }
      var WAITFOR=function(callback,signal)
      {
        callback=USING(callback);
        if(!callback.called)
        {
          WAITSIGNAL(callback,signal);
          signal.pending++
        }
      }
      var WAITEXECUTE=function()
      {
        var signals=this.signal;
        delete this.signal;
        this.execute=this.oldExecute;
        delete this.oldExecute;
        var result=this.execute.apply(this,arguments);
        if(ISCALLBACK(result)&&!result.called)
        {
          WAITSIGNAL(result,signals)
        }
        else
        {
          for(var i=0,m=signals.length;i<m;i++)
          {
            signals[i].pending--;
            if(signals[i].pending<=0)
            {
              signals[i].call()
            }
          }
        }
      };
      var WAITSIGNAL=function(callback,signals)
      {
        if(!(signals instanceof Array))
        {
          signals=[signals]
        }
        if(!callback.signal)
        {
          callback.oldExecute=callback.execute;
          callback.execute=WAITEXECUTE;
          callback.signal=signals
        }
        else
        {
          if(signals.length===1)
          {
            callback.signal.push(signals[0])
          }
          else
          {
            callback.signal=callback.signal.concat(signals)
          }
        }
      }
      var AFTER=function(callback)
      {
        callback=USING(callback);
        callback.pending=0;
        for(var i=1,m=arguments.length;i<m;i++)
        {
          if(arguments[i])
          {
            WAITFOR(arguments[i],callback)
          }
        }
        if(callback.pending===0)
        {
          var result=callback();
          if(ISCALLBACK(result))
          {
            callback=result
          }
        }
        return callback
      }
      var HOOKS=function(hooks,data,reset)
      {
        if(!hooks)
        {
          return null
        }
        if(!(hooks instanceof Array))
        {
          hooks=[hooks]
        }
        if(!(data instanceof Array))
        {
          data=(data==null?[]:[data])
        }
        var callbacks=[{}];
        for(var i=0,m=hooks.length;i<m;i++)
        {
          if(reset)
          {
            hooks[i].reset()
          }
          var result=hooks[i].apply(window,data);
          if(ISCALLBACK(result)&&!result.called)
          {
            callbacks.push(result)
          }
        }
        if(callbacks.length===1)
        {
          return null
        }
        if(callbacks.length===2)
        {
          return callbacks[1]
        }
        return AFTER.apply({},callbacks)
      }
      var QUEUE=BASE.Object.Subclass({Init:function()
      {
        this.pending=0;
        this.running=0;
        this.queue=[];
        this.Push.apply(this,arguments)
      },
       Push:function()
        {
          var callback;
          for(var i=0,m=arguments.length;i<m;i++)
          {
            callback=USING(arguments[i]);
            if(callback===arguments[i]&&!callback.called)
            {
              callback=USING(["wait",this,callback])
            }
            this.queue.push(callback)
          }
          if(!this.running&&!this.pending)
          {
            this.Process()
          }
          return callback 
          Process:function(queue)
          {
            while(!this.running&&!this.pending&&this.queue.length)
            {
              var callback=this.queue[0];
              queue=this.queue.slice(1);
              this.queue=[];
              this.Suspend();
              var result=callback();
              this.Resume();
              if(queue.length)
              {
                this.queue=queue.concat(this.queue)
              }
              if(ISCALLBACK(result)&&!result.called)
              {
                WAITFOR(result,this)
              }
            }
          },
            Suspend:function()
          {
            this.running++
          },
            Resume:function()
          {
            if(this.running)
            {
              this.running--
            }
          },
            call:function()
          {
            this.Process.apply(this,arguments)
          },
            wait:function(callback)
          {
            return callback
          }
        });
           var SIGNAL=QUEUE.Subclass({Init:function(name)
           {
              QUEUE.prototype.Init.call(this);
              this.name=name;
                                      this.posted=[];
                                      this.listeners=[]
                                     },
                                     Post:function(message,callback,forget)
      {
        callback=USING(callback);
        if(this.posting||this.pending)
        {
          this.Push(["Post",this,message,callback,forget])
        }
        else
        {
          this.callback=callback;
          callback.reset();
          if(!forget)
          {
            this.posted.push(message)
          }
          this.Suspend();
          this.posting=1;
          for(var i=0,m=this.listeners.length;i<m;i++)
          {
            this.listeners[i].reset();
            var result=(this.listeners[i])(message);
            if(ISCALLBACK(result)&&!result.called)
            {
              WAITFOR(result,this)
            }
          }
          this.Resume();
          delete this.posting;
          if(!this.pending)
          {
            this.call()
          }
        }
        return callback
      },
        Clear:function(callback)
      {
        callback=USING(callback);
        if(this.posting||this.pending)
        {
          callback=this.Push(["Clear",this,callback])
        }
        else
        {
          this.posted=[];
          callback()
        }
        return callback
      },
        call:function()
      {
        this.callback(this);
        this.Process()
      },
        Interest:function(callback,ignorePast)
      {
        callback=USING(callback);
        this.listeners[this.listeners.length]=callback;
        if(!ignorePast)
        {
          for(var i=0,m=this.posted.length;i<m;i++)
          {
            callback.reset();
            var result=callback(this.posted[i]);
            if(ISCALLBACK(result)&&i===this.posted.length-1)
            {
              WAITFOR(result,this)
            }
          }
        }
        return callback
      },
        NoInterest:function(callback)
      {
        for(var i=0,m=this.listeners.length;i<m;i++)
        {
          if(this.listeners[i]===callback)
          {
            this.listeners.splice(i,1);
            return
          }
        }
      },
        MessageHook:function(msg,callback)
      {
        callback=USING(callback);
        if(!this.hooks)
        {
          this.hooks={};
          this.Interest(["ExecuteHooks",this])
        }
        if(!this.hooks[msg])
        {
          this.hooks[msg]=[]
        }
        this.hooks[msg].push(callback);
        for(var i=0,m=this.posted.length;i<m;i++)
        {
          if(this.posted[i]==msg)
          {
            callback.reset();
            callback(this.posted[i])
          }
        }
        return callback
      },
        ExecuteHooks:function(msg,more)
      {
        var type=((msg instanceof Array)?msg[0]:msg);
        return HOOKS(this.hooks[type],[msg],true)
      }
    },
     {signals:{},find:function(name)
      { 
        if(!SIGNAL.signals[name])
        {
          SIGNAL.signals[name]=new SIGNAL(name)
        }
        return SIGNAL.signals[name]
      }
     });
    BASE.Callback=BASE.CallBack=USING;
    BASE.Callback.Delay=DELAY;
    BASE.Callback.After=AFTER;
    BASE.Callback.Queue=QUEUE;
    BASE.Callback.Signal=SIGNAL.find;
    BASE.Callback.ExecuteHooks=HOOKS
  })("MathJax");
  (function(d){
    var a=window[d];
    if(!a)
    {
      a=window[d]={}
    }
    var c=(navigator.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub==="undefined");
    var f=0;
    var g=function(h)
    {
      if(document.styleSheets&&document.styleSheets.length>f)
      {
        f=document.styleSheets.length
      }
      if(!h)
      {
        h=(document.getElementsByTagName("head"))[0];
        if(!h)
        {
          h=document.body
        }
      }
      return h
    }
    var e=[];
    var b=function()
    {
      for(var j=0,h=e.length;j<h;j++)
      {
        a.Ajax.head.removeChild(e[j])
      }
      e=[]
    }
    a.Ajax={loaded:{},
            loading:{},
            loadHooks:{},
            timeout:15*1000,styleDelay:1,config:{root:""},
            STATUS:{OK:1,ERROR:-1},
            rootPattern:new RegExp("^\\["+d+"\\]"),
            fileURL:function(h)
            {
              return h.replace(this.rootPattern,this.config.root)
            },
            Require:function(j,m)
            {
              m=a.Callback(m);
              var k;
              if(j instanceof Object)
              {
                for(var h in j)
                {}
                k=h.toUpperCase();
                j=j[h]
              }
              else
              {
                k=j.split(/\./).pop().toUpperCase()
              }
              j=this.fileURL(j);
              if(this.loaded[j])
              {
                m(this.loaded[j])
              }
              else
              {
                var l={};
                l[k]=j;
                this.Load(l,m)
              }
              return m
            },
            Load:function(j,l)
            {
              l=a.Callback(l);
              var k;
              if(j instanceof Object)
              {
                for(var h in j)
                {}
                k=h.toUpperCase();
                j=j[h]
              }
              else
              {
                k=j.split(/\./).pop().toUpperCase()
              }
              j=this.fileURL(j);
              if(this.loading[j])
              {
                if(!this.loadHooks[j])
                {
                  this.loadHooks[j]=[]
                }
                this.loadHooks[j].push(l)
              }
              else
              {
                this.head=g(this.head);
                if(this.loader[k])
                {
                  this.loader[k].call(this,j,l)
                }
                else
                {
                  throw Error("Can't load files of type "+k)
                }
              }
              return l
            },
            LoadHook:function(j,k)
            {
              k=a.Callback(k);
              if(j instanceof Object)
              {
                for(var h in j)
                {
                  j=j[h]
                }
              }
              j=this.fileURL(j);
              if(this.loaded[j])
              {
                k(this.loaded[j])
              }
              else
              {
                if(!this.loadHooks[j])
                {
                  this.loadHooks[j]=[]
                }
                this.loadHooks[j].push(k)
              }
              return k
            },
            Preloading:function(){
              for(var k=0,h=arguments.length;k<h;k++)
              {
                var j=this.fileURL(arguments[k]);
                if(!this.loading[j])
                {
                  this.loading[j]={preloaded:true}
                }
              }
            },
            loader:{JS:function(i,k)
                    {
                      var h=document.createElement("script");
                      var j=a.Callback(["loadTimeout",this,i]);
                      this.loading[i]={callback:k,
                                       message:a.Message.File(i),
                                       timeout:setTimeout(j,this.timeout),
                                       status:this.STATUS.OK,
                                       script:h};
                      h.onerror=j;h.type="text/javascript";
                      h.src=i;
                      this.head.appendChild(h)
                    },
                    CSS:function(h,j)
                    {
                      var i=document.createElement("link");
                      i.rel="stylesheet";
                      i.type="text/css";
                      i.href=h;
                      this.loading[h]={callback:j,
                                       message:a.Message.File(h),
                                       status:this.STATUS.OK
                                      };
                      this.head.appendChild(i);
                      this.timer.create.call(this,[this.timer.file,h],i)
                    }
                   },
            timer:{create:function(i,h){i=a.Callback(i);
                                        if(h.nodeName==="STYLE"&&h.styleSheet&&typeof(h.styleSheet.cssText)!=="undefined")
                                        {
                                          i(this.STATUS.OK)
                                        }
                                        else
                                        {
                                          if(window.chrome&&typeof(window.sessionStorage)!=="undefined"&&h.nodeName==="STYLE")
                                          {
                                            if(this.STATUS.OK)
                                          }
                                          else
                                          {
                                            if(c)
                                            {
                                              this.timer.start(this,[this.timer.checkSafari2,f++,i],this.styleDelay)
                                            }
                                            else
                                            {
                                              this.timer.start(this,[this.timer.checkLength,h,i],this.styleDelay)
                                            }
                                          }
                                          }
                                          return i
                                        },
                                          start:function(i,h,j,k)
                                        {
                                          h=a.Callback(h);
                                          h.execute=this.execute;
                                          h.time=this.time;
                                          h.STATUS=i.STATUS;
                                          h.timeout=k||i.timeout;
                                          h.delay=h.total=0;
                                          setTimeout(h,j)
                                        },
                                          time:function(h)
                                        {
                                          this.total+=this.delay;
                                          this.delay=Math.floor(this.delay*1.05+5);
                                          if(this.total>=this.timeout)
                                          {
                                            h(this.STATUS.ERROR);
                                            return 1
                                          }
                                          return 0
                                        },
                                          file:function(i,h)
                                        {
                                          if(h<0)
                                          {
                                            a.Ajax.loadTimeout(i)
                                          }
                                          else
                                          {
                                            a.Ajax.loadComplete(i)
                                          }
                                        },
                                          execute:function()
                                        {
                                          this.hook.call(this.object,this,this.data[0],this.data[1])
                                        },
                                          checkSafari2:function(h,i,j)
                                        {
                                          if(h.time(j))
                                          {
                                            return
                                          }
                                          if(document.styleSheets.length>i&&document.styleSheets[i].cssRules&&document.styleSheets[i].cssRules.length)
                                          {
                                            j(h.STATUS.OK)
                                          }
                                          else
                                          {
                                            setTimeout(h,h.delay)
                                          }
                                        },
                                        checkLength:function(h,k,m)
                                        
                                        {
                                          if(h.time(m))
                                          {
                                            return
                                          }
                                          var l=0;
                                          var i=(k.sheet||k.styleSheet);
                                          try
                                          {
                                            if((i.cssRules||i.rules||[]).length>0)
                                            {
                                              l=1
                                            }
                                          }
                                          catch(j)
                                          {
                                            if(j.message.match(/protected variable|restricted URI/))
                                            {
                                              l=1
                                            }
                                            else
                                            {
                                              if(j.message.match(/Security error/))
                                              {
                                                l=1
                                              }
                                            }
                                          }
                                          if(l)
                                          {
                                            setTimeout(a.Callback([m,h.STATUS.OK]),0)
                                          }
                                          else
                                          {
                                            setTimeout(h,h.delay)
                                          }
                                        }
                                       },
                   loadComplete:function(h)
                   {
                     h=this.fileURL(h);
                     var i=this.loading[h];
                     if(i&&!i.preloaded)
                     {
                       a.Message.Clear(i.message);
                       clearTimeout(i.timeout);
                       if(i.script)
                       {
                         if(e.length===0)
                         {
                           setTimeout(b,0)
                         }
                         e.push(i.script)
                       }
                       this.loaded[h]=i.status;
                       delete this.loading[h];
                       if(!this.loadHooks[h])
                       {
                         this.loadHooks[h]=[]
                       }
                       this.loadHooks[h].push(i.callback)
                     }
                     else
                     {
                       this.loaded[h]=this.STATUS.OK;
                       i={status:this.STATUS.OK}
                     }
                     a.Callback.ExecuteHooks(this.loadHooks[h],i.status)
                   },
                   loadTimeout:function(h)
                   {
                     if(this.loading[h].timeout)
                     {
                       clearTimeout(this.loading[h].timeout)
                     }
                     this.loading[h].status=this.STATUS.ERROR;
                     this.loadError(h);
                     this.loadComplete(h)
                   },
                   loadError:function(h)
                   {
                     a.Message.Set("File failed to load: "+h,null,2000)
                   },
                   Styles:function(j,k)
                   {
                     var h=this.StyleString(j);
                     if(h==="")
                     {
                       k=a.Callback(k);
                       k()
                     }
                     else
                     {
                       var i=document.createElement("style");
                       i.type="text/css";
                       this.head=g(this.head);
                       this.head.appendChild(i);
                       if(i.styleSheet&&typeof(i.styleSheet.cssText)!=="undefined")
                       {
                         i.styleSheet.cssText=h
                       }
                       else
                       {
                         i.appendChild(document.createTextNode(h))
                       }
                       k=this.timer.create.call(this,k,i)
                     }
                     return k
                   },
                   StyleString:function(m)
                   {
                     if(typeof(m)==="string")
                     {
                       return m
                     }
                     var j="",n,l;
                     for(n in m)
                     {
                       if(m.hasOwnProperty(n))
                       {
                         if(typeof m[n]==="string")
                         {
                           j+=n+" {"+m[n]+"}\n"}
                         else
                         {
                           if(m[n] instanceof Array)
                           {
                             for(var k=0;k<m[n].length;k++)
                             {
                               l={};
                               l[n]=m[n][k];
                               j+=this.StyleString(l)
                             }
                           }
                           else
                           {
                             
                             if(n.substr(0,6)==="@media")
                             {
                               j+=n+"{"+this.StyleString(m[n])+"}\n"}
                             else
                             {
                               if(m[n]!=null)
                               {
                                 l=[];
                                 for(var h in m[n])
                                 {
                                   if(m[n].hasOwnProperty(h))
                                   {
                                     if(m[n][h]!=null)
                                     {
                                       l[l.length]=h+": "+m[n][h]
                                     }
                                   }
                                 }
                                 j+=n+" {"+l.join("; ")+"}\n"}}}}}}return j}}})("MathJax");
    MathJax.HTML={Element:function(c,e,d)
                  {
                    var f=document.createElement(c);
                    if(e)
                    {
                      if(e.style)
                      {
                        var b=e.style;
                        e.style={};
                        for(var g in b)
                        {
                          if(b.hasOwnProperty(g))
                          {
                            e.style[g.replace(/-([a-z])/g,this.ucMatch)]=b[g]
                          }
                        }
                      }MathJax.Hub.Insert(f,e)
                    }
                    if(d)
                    {
                      for(var a=0;a<d.length;a++)
                      {
                        if(d[a] instanceof Array)
                        {
                          f.appendChild(this.Element(d[a][0],d[a][1],d[a][2]))
                        }
                        else
                        {f.appendChild(document.createTextNode(d[a]))
                        }
                      }
                    }
                    return f
                  },
                  ucMatch:function(a,b)
                  {
                    return b.toUpperCase()
                  },
                  addElement:function(b,a,d,c)
                  {
                    return b.appendChild(this.Element(a,d,c))
                  },
                  TextNode:function(a)
                  {
                    return document.createTextNode(a)
                  },
                  addText:function(a,b)
                  {
                    return a.appendChild(this.TextNode(b))
                  },
                  setScript:function(a,b)
                  {
                    if(this.setScriptBug)
                    {
                      a.text=b
                    }
                    else
                    {
                      while(a.firstChild)
                      {
                        a.removeChild(a.firstChild)
                      }
                      this.addText(a,b)
                    }
                  },
                  Cookie:{prefix:"mjx",expires:365,Set:function(a,d){
                    var c=[];
                    if(d)
                    {
                      for(var f in d)
                      {
                        if(d.hasOwnProperty(f))
                        {
                          c.push(f+":"+d[f].toString().replace(/&/g,"&&"))
                        }
                      }
                    }
                    var b=this.prefix+"."+a+"="+escape(c.join("&;"));
                    if(this.expires)
                    {
                      var e=new Date();
                      e.setDate(e.getDate()+this.expires);
                      b+="; 
                      expires="+e.toGMTString()
                    }
                    document.cookie=b+"; path=/"},Get:function(c,h)
                          {
                            if(!h)
                            {
                              h={}
                            }
                            var g=new RegExp("(?:^|;\\s*)"+this.prefix+"\\."+c+"=([^;]*)(?:;|$)");
                            var b=g.exec(document.cookie);if(b&&b[1]!=="")
                            {
                              var e=unescape(b[1]).split("&;");
                              for(var d=0,a=e.length;d<a;d++)
                              {
                                b=e[d].match(/([^:]+):(.*)/);
                                var f=b[2].replace(/&&/g,"&");
                                if(f==="true")
                                {
                                  f=true
                                }
                                else
                                {
                                  if(f==="false")
                                  {
                                    f=false
                                  }
                                  else
                                  {
                                    if(f.match(/^-?(\d+(\.\d+)?|\.\d+)$/))
                                    {
                                      f=parseFloat(f)
                                    }
                                  }
                                }
                                h[b[1]]=f
                              }
                            }
                            return h
                          }
                         }
                 }
    
    MathJax.Message={ready:false,log:[{}],
                     current:null,
                     textNodeBug:(navigator.vendor==="Apple Computer, 
                                  Inc."&&typeof navigator.vendorSub==="undefined")||(window.hasOwnProperty&&window.hasOwnProperty("konqueror")),
                                  styles:{"#MathJax_Message":{position:"fixed",left:"1px",bottom:"2px","background-color":"#E6E6E6",border:"1px solid #959595",margin:"0px",padding:"2px 8px","z-index":"102",color:"black","font-size":"80%",width:"auto","white-space":"nowrap"},
                                  "#MathJax_MSIE_Frame":{position:"absolute",top:0,left:0,width:"0px","z-index":101,border:"0px",margin:"0px",padding:"0px"}},
                                  browsers:{MSIE:function(a){MathJax.Hub.config.styles["#MathJax_Message"].position="absolute";
                                  MathJax.Message.quirks=(document.compatMode==="BackCompat")},
      Chrome:function(a)
    {
      MathJax.Hub.config.styles["#MathJax_Message"].bottom="1.5em";
      MathJax.Hub.config.styles["#MathJax_Message"].left="1em"
    }
  },
   Init:function(a)
  {
    if(a)
    {
      this.ready=true
    }
    if(!document.body||!this.ready)
    {
      return false
    }
    if
      (this.div&&this.div.parentNode==null)
    {
      this.div=document.getElementById("MathJax_Message");
      if(this.div)
      {
        this.text=this.div.firstChild
      }
    }
    if(!this.div)
    {
      var b=document.body;
      if(MathJax.Hub.Browser.isMSIE)
      {
        b=this.frame=this.addDiv(document.body);
        b.removeAttribute("id");
        b.style.position="absolute";
        b.style.border=b.style.margin=b.style.padding="0px";
        b.style.zIndex="101";
        b.style.height="0px";
        b=this.addDiv(b);
        b.id="MathJax_MSIE_Frame";
        window.attachEvent("onscroll",this.MoveFrame);
        window.attachEvent("onresize",this.MoveFrame);
        this.MoveFrame()
      }
      this.div=this.addDiv(b);
      this.div.style.display="none";
      this.text=this.div.appendChild(document.createTextNode(""))
    }
    return true
  },
    addDiv:function(a)
  
  {
    var b=document.createElement("div");
    b.id="MathJax_Message";
    if(a.firstChild)
    {
      a.insertBefore(b,a.firstChild)
    }
    else
    {
      a.appendChild(b)
    }
    return b
  },
    MoveFrame:function()
  {
    var a=(MathJax.Message.quirks?document.body:document.documentElement);
    var b=MathJax.Message.frame;
    b.style.left=a.scrollLeft+"px";
    b.style.top=a.scrollTop+"px";
    b.style.width=a.clientWidth+"px";
    b=b.firstChild;
    b.style.height=a.clientHeight+"px"
  },
    filterText:function(a,b)
  {
  if(MathJax.Hub.config.messageStyle==="simple")
  {
    if(a.match(/^Loading /))
    {
      if(!this.loading)
      {
        this.loading="Loading "
      }
      a=this.loading;
      this.loading+="."
    }
    else
    {
      if(a.match(/^Processing /))
      {
        if(!this.processing)
        {
          this.processing="Processing "
        }
        a=this.processing;
        this.processing+="."}
    }
  }
    return a
  },
    Set:function(b,c,a)
  {
    if(this.timer)
    {
      clearTimeout(this.timer);
      delete this.timeout
    }
    if(c==null)
    {
      c=this.log.length;
      this.log[c]={}
    }
    this.log[c].text=b;
    this.log[c].filteredText=b=this.filterText(b,c);
    if(typeof(this.log[c].next)==="undefined")
    {
      this.log[c].next=this.current;
      if(this.current!=null)
      {
        this.log[this.current].prev=c
      }
      this.current=c
    }
    if(this.current===c&&MathJax.Hub.config.messageStyle!=="none")
    {
      if(this.Init())
      {
        if(this.textNodeBug)
        {
          this.div.innerHTML=b
        }
        else
        {
          this.text.nodeValue=b
        }
        this.div.style.display="";
        if(this.status)
        {
          window.status="";
          delete this.status
        }
      }
      else
      {
        window.status=b;
        this.status=true
      }
    }
    if(a){
      setTimeout(MathJax.Callback(["Clear",this,c]),a)
    }
    return c
  },
    Clear:function(b,a)
  {
    if(this.log[b].prev!=null)
    {
      this.log[this.log[b].prev].next=this.log[b].next
    }
    if(this.log[b].next!=null)
    {
      this.log[this.log[b].next].prev=this.log[b].prev
    }
    if(this.current===b)
    {
      this.current=this.log[b].next;
      if(this.text)
      {
        if(this.div.parentNode==null)
        {
          this.Init()
        }
        if(this.current==null)
        {
          if(this.timer)
          {
            clearTimeout(this.timer)
          }
          this.timer=setTimeout(MathJax.Callback(["Remove",this]),(a||600))
        }
        else
        {
          if(MathJax.Hub.config.messageStyle!=="none")
          {
            if(this.textNodeBug)
            {
              this.div.innerHTML=this.log[this.current].filteredText
            }
            else
            {
              this.text.nodeValue=this.log[this.current].filteredText
            }
          }
        }
        if(this.status){window.status="";
                        delete this.status
                       }
      }
      else
      {
        if(this.status)
        {
          window.status=(this.current==null?"":this.log[this.current].text)
        }
      }
    }
    delete this.log[b].next;
    delete this.log[b].prev;
    delete this.log[b].filteredText
  },
    Remove:function()
  {
    this.text.nodeValue="";
    this.div.style.display="none"
  },
  File:function(b)
  {
    var a=MathJax.Ajax.config.root;
    if(b.substr(0,a.length)===a)
    {
      b="[MathJax]"+b.substr(a.length)
    }
    return this.Set("Loading "+b)
  },
    Log:function()
  {
    var b=[];
    for(var c=1,a=this.log.length;c<a;c++)
    {
      b[c]=this.log[c].text
    }
    return b.join("\n")
  }
};
MathJax.Hub={config:{root:"",config:[],styleSheets:[],styles:{},jax:[],extensions:[],preJax:null,postJax:null,displayAlign:"center",displayIndent:"0",preRemoveClass:"MathJax_Preview",showProcessingMessages:true,messageStyle:"normal",delayStartupUntil:"none",skipStartupTypeset:false,"v1.0-compatible":true,elements:[],preProcessors:[],inputJax:{},outputJax:{order:{}},menuSettings:{zoom:"None",CTRL:false,ALT:false,CMD:false,Shift:false,zscale:"200%",renderer:"",font:"Auto",context:"MathJax"
},
                     errorSettings:{message:["[Math Processing Error]"],
                                    style:{color:"#CC0000","font-style":"italic"}}},
             processUpdateTime:250,signal:MathJax.Callback.Signal("Hub"),
             Config:function(a)
             {
               this.Insert(this.config,a);
               if(this.config.Augment)
               {
                 this.Augment(this.config.Augment)
               }
             },
             CombineConfig:function(c,f)
             {
               var b=this.config,g,e;
               c=c.split(/\./);
               for(var d=0,a=c.length;d<a;d++)
               {
                 g=c[d];
                 if(!b[g])
                 {
                   b[g]={}
                 }
                 e=b;
                 b=b[g]
               }e[g]=b=this.Insert(f,b);
               return b
             },
             Register:{PreProcessor:function(a)
                       {
                         MathJax.Hub.config.preProcessors.push(MathJax.Callback(a))},
                       MessageHook:function()
                       {
                         return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal,arguments)},
                       StartupHook:function(){
                         return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal,arguments)
                       },
                       LoadHook:function()
                       {
                         return MathJax.Ajax.LoadHook.apply(MathJax.Ajax,arguments)
                       }
                      },
             getAllJax:function(e)
             {
               var c=[],b=this.elementScripts(e);
               for(var d=0,a=b.length;d<a;d++)
               {if(b[d].MathJax&&b[d].MathJax.elementJax)
               {
                 c.push(b[d].MathJax.elementJax)
               }
               }return c
             },
             getJaxByType:function(f,e)
             {
               var c=[],
                   b=this.elementScripts(e);
               for(var d=0,a=b.length;d<a;d++)
               {
                 if(b[d].MathJax&&b[d].MathJax.elementJax&&b[d].MathJax.elementJax.mimeType===f)
                 {
                   c.push(b[d].MathJax.elementJax)
                 }
               }
               return c
             },
             getJaxByInputType:function(f,e)
             {
               var c=[],
                   b=this.elementScripts(e);
               for(var d=0,a=b.length;d<a;d++)
               {
                 if(b[d].MathJax&&b[d].MathJax.elementJax&&b[d].type&&b[d].type.replace(/ *;(.|\s)*/,"")===f)
                 {
                   c.push(b[d].MathJax.elementJax)
                 }
               }
               return c
             },
             getJaxFor:function(a)
             {
               if
                 (typeof(a)==="string")
               {a=document.getElementById(a)
               }if(a&&a.MathJax)
               {
                 return a.MathJax.elementJax
               }
               return null
             },
             isJax:function(a){
               if(typeof(a)==="string")
               {
                 a=document.getElementById(a)
               }
               if(a&&a.tagName!=null&&a.tagName.toLowerCase()==="script")
               {if
                 (a.MathJax)
               {return(a.MathJax.state===MathJax.ElementJax.STATE.PROCESSED?1:-1)
               }i
               f(a.type&&this.config.inputJax[a.type.replace(/ *;(.|\s)*/,"")]){return -1}}
               return 0
             },
             Queue:function()
             {
               return this.queue.Push.apply(this.queue,arguments)
             },
             Typeset:function(e,f)
             {
               if(!MathJax.isReady)
               {return null
               }
               var c=this.elementCallback(e,f);
               var b=MathJax.Callback.Queue();
               for(var d=0,a=c.elements.length;d<a;d++)
               {
                 if(c.elements[d])
                 {b.Push(["PreProcess",this,c.elements[d]],["Process",this,c.elements[d]])}
               }
               return b.Push(c.callback)
             },
             PreProcess:function(e,f){
               var c=this.elementCallback(e,f);
               var b=MathJax.Callback.Queue();
               for(var d=0,a=c.elements.length;d<a;d++)
               {
                 if(c.elements[d])
                 {b.Push(["Post",this.signal,["Begin PreProcess",c.elements[d]]],["ExecuteHooks",
                                                                                  MathJax.Callback,
                                                                                  (arguments.callee.disabled?[]:this.config.preProcessors),c.elements[d],true],["Post",this.signal,["End PreProcess",c.elements[d]]])}
               }
               return b.Push(c.callback)
             },
             Process:function(a,b)
             {
               return this.takeAction("Process",a,b)
             },
             Update:function(a,b)
             {
               return this.takeAction("Update",a,b)
             }, 
             Reprocess:function(a,b)
             {
               return this.takeAction("Reprocess",a,b)
             },
             takeAction:function(g,f,h){
               var d=this.elementCallback(f,h);
               var c=MathJax.Callback.Queue(["Clear",this.signal]);
               for(var e=0,b=d.elements.length;e<b;e++)
               {
                 if(d.elements[e])
                 {
                   var a=[];
                   c.Push(["Post",this.signal,["Begin "+g,d.elements[e]]],["Post",this.signal,["Begin Math",d.elements[e]]],["prepareScripts",this,g,d.elements[e],a],["processScripts",this,a],["Post",this.signal,["End Math",d.elements[e]]],["Post",this.signal,["End "+g,d.elements[e]]])}}return c.Push(d.callback)
             },
             scriptAction:
             {
               Process:function(a){},
               Update:function(b)
               {
                 var a=b.MathJax.elementJax;
                 if(a&&a.originalText===(b.text==""?b.innerHTML:b.text))
                 {
                   b.MathJax.state=a.STATE.PROCESSED
                 }
                 else
                 {
                   a.outputJax.Remove(a);
                   b.MathJax.state=a.STATE.UPDATE
                 }
               },
               Reprocess:function(b)
               {
                 var a=b.MathJax.elementJax;
                 if(a){
                   a.outputJax.Remove(a);
                   b.MathJax.state=a.STATE.UPDATE
                 }
               }
             },
             prepareScripts:function(h,e,f){
               if(arguments.callee.disabled)
               {
                 return
               }
               var b=this.elementScripts(e);
               var g=MathJax.ElementJax.STATE;
               for(var d=0,a=b.length;d<a;d++)
               {
                 var c=b[d];
                 if(c.type&&this.config.inputJax[c.type.replace(/ *;(.|\n)*/,"")]){
                   if(c.MathJax&&c.MathJax.state!==g.PENDING)
                   {
                     this.scriptAction[h](c)
                   }
                   if(!c.MathJax){
                     c.MathJax={state:g.PENDING}
                   }if(c.MathJax.state!==g.PROCESSED){
                     f.push(c)
                   }
                 }
               }
             },
             checkScriptSiblings:function(a){
               if(a.MathJax&&a.MathJax.checked)
               {
                 return
               }
               var b=this.config;
               var g=a.previousSibling;
               if(g&&g.nodeName=="#text"){
                 var d,f;
                 var c=a.nextSibling;
                 if(c&&c.nodeName!="#text"){
                   c=null
                 }
                 if(b.preJax)
                 {
                   if(typeof(b.preJax)==="string"){
                     b.preJax=new RegExp(b.preJax+"$")
                   }
                   d=g.nodeValue.match(b.preJax)
                 }
                 if(b.postJax&&c){
                   if(typeof(b.postJax)==="string"){
                     b.postJax=new RegExp("^"+b.postJax)
                   }
                   f=c.nodeValue.match(b.postJax)
                 }
                 if(d&&(!b.postJax||f)){
                   g.nodeValue=g.nodeValue.replace(b.preJax,(d.length>1?d[1]:""));
                   g=null
                 }
                 if(f&&(!b.preJax||d))
                 {
                   c.nodeValue=c.nodeValue.replace(b.postJax,(f.length>1?f[1]:""))
                 }
                 if(g&&!g.nodeValue.match(/\S/)){
                   g=g.previousSibling
                 }
               }
               if(b.preRemoveClass&&g&&g.className==b.preRemoveClass)
               {
                 try{g.innerHTML=""
                    }
                 catch(e){}
                 g.style.display="none"
               }
               if(a.MathJax)
               {
                 a.MathJax.checked=1
               }
             },
             processScripts:function(h,b,d)
             {
               if(arguments.callee.disabled)
               {
                 return null
               }
               var q,o=MathJax.ElementJax.STATE;
               var p=this.config.inputJax,c=this.config.outputJax;
               try
               {
                 if(!b)
                 {
                   b=new Date().getTime()
                 }
                 var j=0,l,f;
                 while(j<h.length)
                 {
                   l=h[j];
                   if(!l){
                     j++;continue
                   }
                   f=l.previousSibling;
                   if(f&&f.className==="MathJax_Error")
                   {
                     f.parentNode.removeChild(f)
                   }
                   var k=l.type.replace(/ *;(.|\s)*/,"");
                   if(!l.MathJax||l.MathJax.state===o.PROCESSED){
                     j++;continue
                   }
                   if(!l.MathJax.elementJax||l.MathJax.state===o.UPDATE){
                     this.checkScriptSiblings(l);q=p[k].Process(l);
                     if(typeof q==="function")
                     {
                       if(q.called)
                       {
                         continue
                       }
                       this.RestartAfter(q)}q.Attach(l,p[k]);
                     l.MathJax.state=o.OUTPUT
                   }
                   var a=l.MathJax.elementJax;
                   if(!c[a.mimeType])
                   {
                     l.MathJax.state=o.UPDATE;
                     throw Error("No output jax registered for "+a.mimeType)
                   }
                   a.outputJax=c[a.mimeType][0];q=a.outputJax.Process(l);
                   if(typeof q==="function"){
                     if(q.called){
                       continue
                     }
                     this.RestartAfter(q)
                   }
                   l.MathJax.state=o.PROCESSED;
                   this.signal.Post(["New Math",a.inputID]);
                   j++;
                   if(new Date().getTime()-b>this.processUpdateTime&&j<h.length){
                     b=0;
                     this.RestartAfter(MathJax.Callback.Delay(1))
                   }
                 }
               }
               catch(g){
                 if(!g.restart){
                   if(!this.config.errorSettings.message){
                     throw g
                   }
                   this.formatError(l,g);
                   j++
                 }
                 if(!d)
                 {
                   d=0
                 }
                 var e=Math.floor((d+j)/(d+h.length)*100);
                 d+=j;
                 if(this.config.showProcessingMessages){
                   MathJax.Message.Set("Processing math: "+e+"%",0)
                 }
                 return MathJax.Callback.After(["processScripts",this,h.slice(j),b,d],g.restart)
               }
               if((d||h.length)&&this.config.showProcessingMessages){
                 MathJax.Message.Set("Processing Math: 100%",0);
                 MathJax.Message.Clear(0)}return null},formatError:function(a,c)
             {
               var b=MathJax.HTML.Element("span",{className:"MathJax_Error"},this.config.errorSettings.message);
               a.parentNode.insertBefore(b,a);
               this.lastError=c
             },
             RestartAfter:function(a)
             {
               throw this.Insert(Error("restart"),
                                 {
                 restart:MathJax.Callback(a)
               })},
             elementCallback:function(c,f){
               if(f==null&&(c instanceof Array||typeof c==="function")){
                 try{
                   MathJax.Callback(c);
                   f=c;
                   c=null
                 }
                 catch(d){}
               }
               if(c==null){
                 c=this.config.elements||[]
               }
               if(!(c instanceof Array))
               {
                 c=[c]}c=[].concat(c);
               for(var b=0,a=c.length;b<a;b++)
               {
                 if(typeof(c[b])==="string"){
                   c[b]=document.getElementById(c[b])
                 }
               }
               if(c.length==0){
                 c.push(document.body)
               }
               if(!f){
                 f={}
               }
               return
               {
              elements:c,callback:f
               }
             },
             elementScripts:function(a)
             {
               if(typeof(a)==="string")
               {
                 a=document.getElementById(a)
               }
               if(a==null){
                 a=document.body
               }
               if(a.tagName!=null&&a.tagName.toLowerCase()==="script"){
                 return[a]
               }
               return a.getElementsByTagName("script")
             },
             Insert:function(c,a){
               for(var b in a){if(a.hasOwnProperty(b))
               {
                 if(typeof a[b]==="object"&&!(a[b] instanceof Array)&&(typeof c[b]==="object"||typeof c[b]==="function"))
                 {
                   this.Insert(c[b],a[b])
                 }
                 else{
                   c[b]=a[b]}}}return c
             }
            };
MathJax.Hub.Insert(MathJax.Hub.config.styles,MathJax.Message.styles);
MathJax.Hub.Insert(MathJax.Hub.config.styles,
                   {".MathJax_Error":MathJax.Hub.config.errorSettings.style});
MathJax.Extension={};
MathJax.Hub.Configured=MathJax.Callback({});
MathJax.Hub.Startup={script:"",queue:MathJax.Callback.Queue(),signal:MathJax.Callback.Signal("Startup"),params:{},
                     Config:function(){
                       this.queue.Push(["Post",this.signal,"Begin Config"]);
                       var b=MathJax.HTML.Cookie.Get("user");
                       if(b.URL||b.Config){
                         if(confirm("MathJax has found a user-configuration cookie that includes code to be run.  Do you want to run it?\n\n(You should press Cancel unless you set up the cookie yourself.)"))
                         {
                           if(b.URL){
                             this.queue.Push(["Require",MathJax.Ajax,b.URL])
                           }
                           if(b.Config){
                             this.queue.Push(new Function(b.Config))
                           }
                         }
                         else{
                           MathJax.HTML.Cookie.Set("user",{})
                         }
                       }
                       if(this.params.config){
                         var d=this.params.config.split(/,/);
                         for(var c=0,a=d.length;c<a;c++){
                           if(!d[c].match(/\.js$/)){
                             d[c]+=".js"
                           }
                           this.queue.Push(["Require",MathJax.Ajax,this.URL("config",d[c])])
                         }
                       }
                       if(this.script.match(/\S/)){
                         this.queue.Push(this.script+";\n1;")
                       }
                       this.queue.Push(["ConfigDelay",this],["ConfigBlocks",this],["ConfigDefault",this],[function(e){return e.loadArray(MathJax.Hub.config.config,"config",null,true)},this],["Post",this.signal,"End Config"])
                     },
                     ConfigDelay:function(){
                       var a=this.params.delayStartupUntil||MathJax.Hub.config.delayStartupUntil;
                       if(a==="onload"){
                         return this.onload}
                       if(a==="configured"){
                         return MathJax.Hub.Configured
                       }
                       return a
                     },
                     ConfigBlocks:function(){
                       var c=document.getElementsByTagName("script");
                       var f=null,b=MathJax.Callback.Queue();
                       for(var d=0,a=c.length;d<a;d++){
                         var e=String(c[d].type).replace(/ /g,"");
                         if(e.match(/^text\/x-mathjax-config(;.*)?$/)&&!e.match(/;executed=true/)){c[d].type+=";
                                                                                                   executed=true";
                                                                                                   f=b.Push(c[d].innerHTML+";\n1;")
                                                                                                  }
                       }
                       return f
                     },
                     ConfigDefault:function(){
                       var a=MathJax.Hub.config;
                       if(a["v1.0-compatible"]&&a.jax.length===0)
                       {
                         return MathJax.Ajax.Require(this.URL("extensions","v1.0-warning.js"))
                       }
                     },
                     Cookie:function(){
                       return this.queue.Push(["Post",this.signal,"Begin Cookie"],["Get",MathJax.HTML.Cookie,"menu",MathJax.Hub.config.menuSettings],
                                              [function(d){
                                                var f=d.menuSettings.renderer,b=d.jax;
                                                if(f)
                                                {
                                                  var c="output/"+f;
                                                  b.sort();
                                                  for(var e=0,a=b.length;e<a;e++){
                                                    if(b[e].substr(0,7)==="output/"){
                                                      break
                                                    }
                                                  }
                                                  if(e==a-1){
                                                    b.pop()
                                                  }
                                                  else{
                                                    while(e<a){
                                                      if(b[e]===c){
                                                        b.splice(e,1);
                                                        break
                                                      }
                                                      e++
                                                    }
                                                  }
                                                  b.unshift(c)
                                                }
                                              },
                                               MathJax.Hub.config],["Post",this.signal,"End Cookie"])
                     },
                     Styles:function(){
                       return this.queue.Push(["Post",this.signal,"Begin Styles"],["loadArray",this,MathJax.Hub.config.styleSheets,"config"],["Styles",MathJax.Ajax,MathJax.Hub.config.styles],["Post",this.signal,"End Styles"])
                     },
                     Jax:function(){
                       var d=MathJax.Hub.config;
                       for(var e=0,b=d.jax.length,c=0;e<b;e++)
                       {
                         if(d.jax[e].substr(0,7)==="output/")
                         {
                           d.outputJax.order[d.jax[e].substr(7)]=c;c++
                         }
                       }
                       var a=MathJax.Callback.Queue();
                       return a.Push(["Post",this.signal,"Begin Jax"],["loadArray",this,d.jax,"jax","config.js"],["Post",this.signal,"End Jax"])
                     },
                     Extensions:function()
                     {
                       var a=MathJax.Callback.Queue();
                       return a.Push(["Post",this.signal,"Begin Extensions"],["loadArray",this,MathJax.Hub.config.extensions,"extensions"],["Post",this.signal,"End Extensions"])
                     },
                     Message:function()
                     {
                       MathJax.Message.Init(true)
                     },
                     Menu:function(){
                       var b=MathJax.Hub.config.menuSettings,a=MathJax.Hub.config.outputJax,d;
                       for(var c in a)
                       {
                         if(a.hasOwnProperty(c)){
                           
                           if(a[c].length){
                             d=a[c];break
                           }
                         }
                       }
                       if(d&&d.length){
                         if(b.renderer&&b.renderer!==d[0].id)
                         {
                           d.unshift(MathJax.OutputJax[b.renderer])
                         }
                         b.renderer=d[0].id
                       }
                     },
                     onLoad:function(a){
                       var b=this.onload=MathJax.Callback(function(){
                         MathJax.Hub.Startup.signal.Post("onLoad")
                       });
                       if(window.addEventListener){
                         window.addEventListener("load",b,false)
                       }
                       else{
                         if(window.attachEvent){
                           window.attachEvent("onload",b)
                         }
                         else{
                           window.onload=b
                         }
                       }
                       return b
                     },
                     Typeset:function(a,b){
                       if(MathJax.Hub.config.skipStartupTypeset){
                         return function(){}
                       }
                       return this.queue.Push(["Post",this.signal,"Begin Typeset"],["Typeset",MathJax.Hub,a,b],["Post",this.signal,"End Typeset"])
                     },
                     URL:function(b,a){
                       if(!a.match(/^([a-z]+:\/\/|\[|\/)/)){
                         a="[MathJax]/"+b+"/"+a
                       }
                       return a
                     },
                     loadArray:function(b,f,c,a){
                       if(b)
                       {
                         if(!(b instanceof Array))
                         {
                           b=[b]
                         }
                         if(b.length){
                           var h=MathJax.Callback.Queue(),
                               j={},e;
                           for(var g=0,d=b.length;g<d;g++)
                           {
                             e=this.URL(f,b[g]);
                             if(c){
                               e+="/"+c
                             }
                             if(a){
                               h.Push(["Require",MathJax.Ajax,e,j])
                             }
                             else{
                               h.Push(MathJax.Ajax.Require(e,j))
                             }
                           }
                           return h.Push({})
                         }
                       }
                       return null
                     }
                    };
(function(d){
  var b=window[d],e="["+d+"]";
  var c=b.Hub,a=b.Ajax,f=b.Callback;
  var g=MathJax.Object.Subclass({JAXFILE:"jax.js",require:null,config:{},
                                 Init:function(i,h){
                                   if(arguments.length===0){
                                     return this
                                   }
                                   return(this.constructor.Subclass(i,h))()
                                 },
                                 Augment:function(k,j){
                                   var i=this.constructor,h={};if(k!=null){for(var l in k)
                                   {
                                     if(k.hasOwnProperty(l))
                                     {
                                       if(typeof k[l]==="function")
                                       {
                                         i.protoFunction(l,k[l])
                                       }
                                       else{
                                         h[l]=k[l]
                                       }
                                     }
                                   }
                                  if(k.toString!==i.prototype.toString&&k.toString!=={}.toString){
                                    i.protoFunction("toString",k.toString)
                                  }
                                    }
                                   c.Insert(i.prototype,h);
                                   i.Augment(null,j);
                                   return this
                                 },
                                 Process:function(h)
                                 {
                                   var i=a.Require(this.directory+"/"+this.JAXFILE);
                                   if(!i.called)
                                   {
                                     this.constructor.prototype.Process=function(j){
                                       return i
                                     }
                                   }
                                   return i
                                 },
                                 Translate:function(h){
                                   throw Error(this.directory+"/"+this.JAXFILE+" failed to redefine the Translate() method")
                                 },
                                 Register:function(h){},Config:function(){
                                   this.config=c.CombineConfig(this.id,this.config);
                                   if(this.config.Augment){
                                     this.Augment(this.config.Augment)
                                   }
                                 },
                                 Startup:function(){},
                                 loadComplete:function(i){
                                   if(i==="config.js"){
                                     a.loadComplete(this.directory+"/"+i)
                                   }
                                   else{
                                     var h=f.Queue();
                                     h.Push(c.Register.StartupHook("End Config",{}),
                                            ["Post",c.Startup.signal,this.id+" Jax Config"],["Config",this],["Post",c.Startup.signal,this.id+" Jax Require"],[function(j){return MathJax.Hub.Startup.loadArray(j.require,this.directory)},this],[function(j,k){return MathJax.Hub.Startup.loadArray(j.extensions,"extensions/"+k)
                                            },
                                            this.config||{},this.id],["Post",c.Startup.signal,this.id+" Jax Startup"],["Startup",this],["Post",c.Startup.signal,this.id+" Jax Ready"],[function(j){j.Process=j.Translate},
                                            this.constructor.prototype],["loadComplete",a,this.directory+"/"+i])}}},
                                {id:"unknown",version:"1.1",directory:e+"/jax",extensionDir:e+"/extensions"});
  b.InputJax=g.Subclass({elementJax:"mml",
                         Process:function(o)
                         {
                           var j=f.Queue();
                           var k=this.elementJax;
                           if(!(k instanceof Array))
                           {
                             k=[k]
                           }
                           for(var n=0,h=k.length;n<h;n++)
                           {
                             var l=b.ElementJax.directory+"/"+k[n]+"/"+this.JAXFILE;
                             if(!this.require){
                               this.require=[]
                             }
                             else{
                               if(!(this.require instanceof Array)){
                                 this.require=[this.require]
                               }
                             }this.require.push(l);
                             j.Push(a.Require(l))
                           }
                           var p=j.Push(a.Require(this.directory+"/"+this.JAXFILE));
                           if(!p.called){
                             this.constructor.prototype.Process=function(){
                               return p
                             }
                           }
                           k=c.config.outputJax["jax/"+k[0]];if(k){
                             j.Push(a.Require(k[0].directory+"/"+this.JAXFILE))
                           }
                           return j.Push({})
                         },
                         Register:function(h){
                           if(!c.config.inputJax){
                             c.config.inputJax={}
                           }
                           c.config.inputJax[h]=this}},{version:"1.1",directory:g.directory+"/input",extensionDir:g.extensionDir});
  b.OutputJax=g.Subclass({Register:function(i){
    var h=c.config.outputJax;
    if(!h[i]){
      h[i]=[]
    }
    if(h[i].length&&(this.id===c.config.menuSettings.renderer||(h.order[this.id]||0)<(h.order[h[i][0].id]||0)))
    {
      h[i].unshift(this)
    }
    else{
      h[i].push(this)
    }
    if(!this.require){
      this.require=[]
    }else{
      if(!(this.require instanceof Array)){
        this.require=[this.require]
      }
    }
    this.require.push(b.ElementJax.directory+"/"+(i.split(/\//)[1])+"/"+this.JAXFILE)},
                          Remove:function(h)
                          {}
                         },
                         {version:"1.1",directory:g.directory+"/output",extensionDir:g.extensionDir,fontDir:e+(b.isPacked?"":"/..")+"/fonts"});
  b.ElementJax=g.Subclass({Init:function(i,h){
    return this.constructor.Subclass(i,h)
  },
                           inputJax:null,outputJax:null,inputID:null,originalText:"",mimeType:"",
                           Text:function(i,j){
                             var h=this.SourceElement();
                             b.HTML.setScript(h,i);
                             h.MathJax.state=this.STATE.UPDATE;
                             return c.Update(h,j)},Reprocess:function(i)
                           {
                             var h=this.SourceElement();
                             h.MathJax.state=this.STATE.UPDATE;
                             return c.Reprocess(h,i)
                           },
                           Update:function(i)
                           {
                             var h=this.SourceElement();
                             h.MathJax.state=this.STATE.OUTPUT;
                             return c.Process(h,i)
                           },
                           Remove:function()
                           {
                             this.outputJax.Remove(this);
                             c.signal.Post(["Remove Math",this.inputID]);
                             this.Detach()
                           },
                           SourceElement:function(){
                             return document.getElementById(this.inputID)
                           },
                           Attach:function(i,j)
                           {
                             var h=i.MathJax.elementJax;
                             if(i.MathJax.state===this.STATE.UPDATE){
                               h.Clone(this)
                             }else{
                               h=i.MathJax.elementJax=this;
                               if(i.id){
                                 this.inputID=i.id
                               }
                               else{
                                 i.id=this.inputID=b.ElementJax.GetID();
                                 this.newID=1}}h.originalText=(i.text==""?i.innerHTML:i.text);
                             h.inputJax=j;
                             if(h.root){
                               h.root.inputID=h.inputID
                             }
                           },
                           Detach:function(){
                             var h=this.SourceElement();
                             if(!h){
                               return
                             }
                             try{
                               delete h.MathJax
                             }
                             catch(i){
                               h.MathJax=null
                             }
                             if(this.newID)
                             {
                               h.id=""
                             }
                           },
                           Clone:function(h)
                           {
                             var i;
                             for(i in this)
                             {
                               if(!this.hasOwnProperty(i))
                               {
                                 continue
                               }
                               if(typeof(h[i])==="undefined"&&i!=="newID")
                               {
                                 delete this[i]
                               }
                             }
                             for(i in h)
                             {
                               if(!this.hasOwnProperty(i))
                               {
                                 continue
                               }
                               if(typeof(this[i])==="undefined"||(this[i]!==h[i]&&i!=="inputID"))
                               {
                                 this[i]=h[i]
                               }
                             }
                           }
                          },
                          {
    version:"1.1",directory:g.directory+"/element",extensionDir:g.extensionDir,ID:0,STATE:{PENDING:1,PROCESSED:2,UPDATE:3,OUTPUT:4},
    GetID:function(){
      this.ID++;
      return"MathJax-Element-"+this.ID
    },
    Subclass:function(){
      var h=g.Subclass.apply(this,arguments);
      h.loadComplete=this.prototype.loadComplete;
      return h
    }
  });
  b.ElementJax.prototype.STATE=b.ElementJax.STATE})
("MathJax");
(function(l){
  var f=window[l];
  if(!f){
    f=window[l]={}
  }
  var c=f.Hub;
  var q=c.Startup;
  var u=c.config;
  var e=document.getElementsByTagName("head")[0];
  if(!e){
    e=document.childNodes[0]
  }
  var b=(document.documentElement||document).getElementsByTagName("script");
  var d=new RegExp("(^|/)"+l+"\\.js(\\?.*)?$");
  for(var o=b.length-1;o>=0;o--){
    if(b[o].src.match(d)){
      q.script=b[o].innerHTML;
      if(RegExp.$2){
        var r=RegExp.$2.substr(1).split(/\&/);
        for(var n=0,h=r.length;n<h;n++){
          var k=r[n].match(/(.*)=(.*)/);
          if(k){
            q.params[unescape(k[1])]=unescape(k[2])}}}u.root=b[o].src.replace(/(^|\/)[^\/]*(\?.*)?$/,"");
      break
    }
  }
  f.Ajax.config=u;
  var a={isMac:(navigator.platform.substr(0,3)==="Mac"),isPC:(navigator.platform.substr(0,3)==="Win"),isMSIE:(window.ActiveXObject!=null&&window.clipboardData!=null),isFirefox:(window.netscape!=null&&document.ATTRIBUTE_NODE!=null&&!window.opera),isSafari:(navigator.userAgent.match(/ (Apple)?WebKit\//)!=null&&!window.chrome),isChrome:(window.chrome!=null&&window.chrome.loadTimes!=null),isOpera:(window.opera!=null&&window.opera.version!=null),isKonqueror:(window.hasOwnProperty&&window.hasOwnProperty("konqueror")&&navigator.vendor=="KDE"),
         versionAtLeast:function(x){
           var w=(this.version).split(".");
           x=(new String(x)).split(".");
           for(var y=0,j=x.length;y<j;y++){
             if(w[y]!=x[y]){
               return parseInt(w[y]||"0")>=parseInt(x[y])
             }
           }
           return true
         },
         Select:function(j){
           var i=j[c.Browser];
           if(i){
             return i(c.Browser)
           }
           return null
         }
        }
  var g=navigator.userAgent.replace(/^Mozilla\/(\d+\.)+\d+ /,"").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i,"").replace(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/,"");
  c.Browser=c.Insert(c.Insert(new String("Unknown"),{version:"0.0"}),a);
  for(var t in a)
  {
    if(a.hasOwnProperty(t))
    {
      if(a[t]&&t.substr(0,2)==="is")
      {
        t=t.slice(2);
        if(t==="Mac"||t==="PC"){
          continue
        }
        c.Browser=c.Insert(new String(t),a);
        var p=new RegExp(".*(Version)/((?:\\d+\\.)+\\d+)|.*("+t+")"+(t=="MSIE"?" ":"/")+"((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)");
        var s=p.exec(g)||["","","","unknown","0.0"];c.Browser.name=(s[1]=="Version"?t:(s[3]||s[5]));c.Browser.version=s[2]||s[4]||s[6];
        break
      }
    }
  }
  c.Browser.Select({Safari:function(j)
                    {var i=parseInt((String(j.version).split("."))[0]);
                     if(i>85){j.webkit=j.version}if(i>=533)
                     {
                       j.version="5.0"
                     }
                     else
                     {
                       if(i>=526){
                         j.version="4.0"
                       }
                       else
                       {
                         if(i>=525){
                           j.version="3.1"
                         }
                         else{
                           if(i>500){
                             j.version="3.0"
                           }
                           else{
                             if(i>400){
                               j.version="2.0"
                             }
                             else{
                               if(i>85){
                                 j.version="1.0"}
                             }}}}}
                    },
                    Firefox:function(j){
                      if(j.version==="0.0"&&navigator.product==="Gecko"&&navigator.productSub){
                        var i=navigator.productSub.substr(0,8);
                        if(i>="20090630"){
                          j.version="3.5"
                        }
                        else{
                          if(i>="20080617"){
                            j.version="3.0"
                          }
                          else{
                            if(i>="20061024"){
                              j.version="2.0"
                            }
                          }
                        }
                      }
                    },
                    Opera:function(i){
                      i.version=opera.version()
                    },
                    MSIE:function(i){
                      i.isIE9=!!(document.documentMode&&(window.performance||window.msPerformance));
                      MathJax.HTML.setScriptBug=!i.isIE9||document.documentMode<9
                    }
                   });
                  c.Browser.Select(MathJax.Message.browsers);
  c.queue=f.Callback.Queue();
  c.queue.Push(["Post",q.signal,"Begin"],["Config",q],["Cookie",q],["Styles",q],["Message",q],
               function(){
    var i=f.Callback.Queue(q.Jax(),q.Extensions());
    return i.Push({})
  },
               ["Menu",q],q.onLoad(),function(){MathJax.isReady=true},["Typeset",q],["Post",q.signal,"End"])})("MathJax")}};

