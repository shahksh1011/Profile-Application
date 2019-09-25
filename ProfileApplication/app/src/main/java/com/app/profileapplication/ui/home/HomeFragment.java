package com.app.profileapplication.ui.home;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.app.profileapplication.R;
import com.app.profileapplication.models.User;
import com.app.profileapplication.utilities.Parameters;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class HomeFragment extends Fragment {
    private static final String TAG = "HomeFragment";
    private String token;
    private User user;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        View root = inflater.inflate(R.layout.fragment_home, container, false);
        token = getArguments().getString(Parameters.TOKEN);
        user = (User) getArguments().getSerializable(Parameters.USER_ID);
        final TextView textView = root.findViewById(R.id.text_home);
        return root;
    }


}