"use client";

import { useEffect, useState } from "react";

const ascii_frames = [
  // first frame
  `
                    w             w                                                                 w             w           
                                                         w                                                                    
            w                                                             w                                                   
                                         w                                                   w                                
                         w                           w                                                                        
                                                                                                                              
                                                              .oOO                                                            
                 w                                            v| |                               w                            
                                   w                                        w                                      w          
  w                                                                                                                           
                                                w         w                                                                   
                   @oOo                                                                                                       
                    \ /                                            w                        w                                 
                              w                                                                               w               
                                                                                                                              
                                                                            w                                                 
        w                                                                                                                     
                          w                                                                               w                   
                                                                                                                              
                                                          w                                 w                                 
                                              w                                                                               
                                w                                       w                                       w             
                                                                                                                              
                                                                                                                              
                   w                                                                               w                          
                                                                                                                              
     w                      oOO@                                                     w                                        
                            / \                                                                                               
                                                                       w                                 w                    
                                                                                                                              
           w                          w                 w                                                                     
                                                                               w                                   w         w
                                                                                                                              
                             w                                                                                                
                                                                                                                              
                                                                w        .oOO                                                 
                                                                         v| |            w             w                      
        w                                                                                                                     
                                         w                                                                                    
                                                                                                                              
                                                                                                                             w
                                                                             w                                   w            
                   w                                                                                                          
                                    w                   w                                                                     
   w                                                              w                             w                             
               w                                                                                                              
                                                                                                                              
                                                                               w                                              
                       oOo.                                                                           w                       
                       | |v           w                                                                                       
                                                                                                                              
                    w                                                 w                                                       
                                                          w                                                                   
                             w                                                                                         w      
                                                                               w                                              
                                                                  w                               w                           
   w                                  w                                                                     w                 
            w                                                                                                                 
                                                                                                                              
                                                                                                                         w    
                                                                                                                              
                                                         w                                                                    
                                  w                                                                                           
                w                                                                        oOO@                   w             
                                                                                         / \        w                         
                                                                                                                              
                                                                                                                         w    
                                                                          w                                 w                 
         @oOO                                                                                                                 
          | |                    w                                                                                            
                                                                                  w                                           
w                                                                                                                             
                                                      w                                                                       
                                                                                                   w                          
             w                                                               w                                                
                                                                                                                              
                          w         w                                                                                         
`,
  // second frame
  `
                    w             w                                                                 w             w           
                                                         w                                                                    
            w                                                             w                                                   
                                         w                                                   w                                
                         w                           w                                                                        
                                                                                                                              
                                                              @oOO                                                            
                 w                                             | |                               w                            
                                   w                                        w                                      w          
  w                                                                                                                           
                                                w         w                                                                   
                  @oOo                                                                                                       
                w  / \                                             w                        w                                 
                              w                                                                               w               
                                                                                                                              
                                                                            w                                                 
        w                                                                                                                     
                          w                                                                               w                   
                                                                                                                              
                                                          w                                 w                                 
                                              w                                                                               
                                w                                       w                                       w             
                                                                                                                              
                                                                                                                              
                   w                                                                               w                          
                                                                                                                              
     w                       oOO@                                                     w                                        
                             \ /                                                                                               
                                                                       w                                 w                    
                                                                                                                              
           w                          w                 w                                                                     
                                                                               w                                   w         w
                                                                                                                              
                             w                                                                                                
                                                                                                                              
                                                                w        @oOO                                                 
                                                                          | |            w             w                      
        w                                                                                                                     
                                         w                                                                                    
                                                                                                                              
                                                                                                                             w
                                                                             w                                   w            
                   w                                                                                                          
                                    w                   w                                                                     
   w                                                              w                             w                             
               w                                                                                                              
                                                                                                                              
                                                                               w                                              
                       oOo@                                                                           w                       
                       | |            w                                                                                       
                                                                                                                              
                    w                                                 w                                                       
                                                          w                                                                   
                             w                                                                                         w      
                                                                               w                                              
                                                                  w                               w                           
   w                                  w                                                                     w                 
            w                                                                                                                 
                                                                                                                              
                                                                                                                         w    
                                                                                                                              
                                                         w                                                                    
                                  w                                                                                           
                w                                                                         oOo@                  w             
                                                                                          \ /       w                         
                                                                                                                              
                                                                                                                         w    
                                                                          w                                 w                 
        @oOo                                                                                                                 
         \ /                     w                                                                                            
                                                                                  w                                           
w                                                                                                                             
                                                      w                                                                       
                                                                                                   w                          
             w                                                               w                                                
                                                                                                                              
                          w         w                                                                                         
`,
];

export default function AsciiAnimation() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % ascii_frames.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <pre style={{ fontFamily: "monospace", fontSize: "10px", color: "white" }}>
      {ascii_frames[frame]}
    </pre>
  );
}
