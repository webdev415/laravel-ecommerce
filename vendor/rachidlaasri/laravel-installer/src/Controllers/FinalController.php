<?php

namespace RachidLaasri\LaravelInstaller\Controllers;
use App\Events\Inst;
use App\Http\Controllers\Controller;
use RachidLaasri\LaravelInstaller\Helpers\InstalledFileManager;

class FinalController extends Controller
{
    /**
     * Update installed file and display finished view.
     *
     * @param InstalledFileManager $fileManager
     * @return \Illuminate\View\View
     */
    public function finish(InstalledFileManager $fileManager)
    {
        $fileManager->update(
            config('installer.last_version')
        );
        return view('vendor.installer.finished');
    }
}