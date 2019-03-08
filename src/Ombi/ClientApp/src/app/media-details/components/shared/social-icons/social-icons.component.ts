import { Component, Inject, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "social-icons",
    templateUrl: "./social-icons.component.html",
})
export class SocialIconsComponent {
    
    @Input() homepage: string;
    @Input() theMoviedbId: number;
    @Input() hasTrailer: boolean;
    @Input() imdbId: string;
    @Input() tvdbId: string;
    @Input() twitter: string;
    @Input() facebook: string;
    @Input() instagram: string;
    @Input() available: boolean;
    @Input() plexUrl: string;
    @Input() embyUrl: string;
    
    @Output() openTrailer: EventEmitter<any>;
    

    public openDialog() {
        this.openTrailer.emit;
    }
}
