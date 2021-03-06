import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { TopNewsPageModule } from '../top-news/top-news.module';
import { HeadlinesPageModule } from '../headlines/headlines.module';
import { SettingsPageModule } from '../settings/settings.module';
import { FavoritesPageModule } from '../favorites/favorites.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TopNewsPageModule,
    HeadlinesPageModule,
    SettingsPageModule,
    FavoritesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
