import { Component } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  name : string | undefined;
   contentArray: Content[] = [];
   logContentInfo(id: string, title: string) {
    console.log("Content ID:", id);
    console.log("Content Title:", title);
  }
  
  
  constructor(){
  this.contentArray.push(
    
      { 
        id: 1, 
        title: 'Badminton', description: 'Badminton, court or lawn game ', creator: 'The Duke of Beaufort', imgURL: 'https://www.games-eshop.com/wp-content/uploads/2020/09/Badminton_Den_Haag-scaled-2-2048x1365.jpg', type: 'Indoor',
        tags: ['Tag1', 'Tag2'] 
      },
      { 
        id: 2, 
        title: 'Football', description: 'Association football or soccer', creator: 'James Haldane ', imgURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f8c677104758261.5f6a25a1a5f8d.jpg', type: 'Outdoor',
        tags: ['Tag3', 'Tag6'] 
      },
      { 
        id: 3, 
        title: 'Racing', description: 'Racing is my favourite', creator: 'Jakson Wild', imgURL: 'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/e7783bd1-cbb5-42ac-87ce-053670c4b357_scaled.jpg', type: 'Outdoor',
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 4, 
        title: 'No name for this', 
        description: 'Description for all games', 
        creator: 'Harry tho', 
        imgURL: 'https://www.wallpaperup.com/uploads/wallpapers/2014/06/24/377589/38350a3152f132e5dbc4de5e802734b4.jpg', 
        type: 'computer', 
        tags: ['Tag5', 'Tag6'] 
      },  { 
        id: 5, 
        title: 'Cycling', 
        description: 'Cycling is goods for health', 
        creator: 'Nature', 
        imgURL: 'https://th.bing.com/th/id/OIP.TDlor4RPF_NhbTDUCN4qSAHaE8?rs=1&pid=ImgDetMain', 
        type: 'outdoor', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 6, 
         title: 'Long Jump ', description: 'Long jump is my favourite', creator: 'gurdeep', imgURL: 'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/e7783bd1-cbb5-42ac-87ce-053670c4b357_scaled.jpg', type: 'Outdoor',
        tags: ['Tag5', 'Tag6'] 
      }
     );
    

   
    




    
    
    
      // Add more content items if needed
    }

}