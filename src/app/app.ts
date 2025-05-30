import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrl: 'app.scss',
})
export class App {
  @ViewChild('audioElement') public audioElement!: ElementRef<HTMLAudioElement>;

  public isPlaying: boolean = false;

  private interval?: number;

  public playHeartbeat(): void {
    if (!this.isPlaying) return;

    this.audioElement.nativeElement.currentTime = 0;
    this.audioElement.nativeElement.play().then();
  }

  public onPlaySound(): void {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      this.playHeartbeat();
      this.interval = setInterval(() => this.playHeartbeat(), 1600);
    } else {
      clearInterval(this.interval);
    }

  }
}
